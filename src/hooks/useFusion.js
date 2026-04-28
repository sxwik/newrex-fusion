import { useState, useCallback, useRef } from 'react'

const MODELS = [
  { id: 'gpt',    name: 'GPT-4o',     provider: 'OpenAI',    color: '#63b3ed', gradient: 'linear-gradient(90deg,#63b3ed,#4299e1)', lat: 820, tok: 312, delay: 600  },
  { id: 'claude', name: 'Claude 3.5', provider: 'Anthropic', color: '#b794f4', gradient: 'linear-gradient(90deg,#b794f4,#9f7aea)', lat: 940, tok: 287, delay: 900  },
  { id: 'gemini', name: 'Gemini 1.5', provider: 'Google',    color: '#68d391', gradient: 'linear-gradient(90deg,#68d391,#48bb78)', lat: 710, tok: 341, delay: 500  },
  { id: 'llama',  name: 'Llama 3.1',  provider: 'Meta',      color: '#f6ad55', gradient: 'linear-gradient(90deg,#f6ad55,#ed8936)', lat: 390, tok: 198, delay: 300  },
]

const SAMPLE_RESPONSE = `Quantum computing harnesses the principles of quantum mechanics to process information in ways that classical computers cannot.

Unlike classical bits (0 or 1), quantum bits — or qubits — can exist in a superposition of both states simultaneously. This allows quantum computers to explore many possible solutions at once.

Two key phenomena enable quantum advantage:

• Superposition: A qubit can be both 0 and 1 until measured.

• Entanglement: Qubits can become correlated so that measuring one instantly determines the other, regardless of distance.

Quantum algorithms like Shor's (factorisation) and Grover's (search) demonstrate exponential or quadratic speedups for specific problem classes. Current hardware — called NISQ devices — is noisy, but companies like IBM, Google, and IonQ are steadily improving qubit coherence times and error correction.`

function ts() {
  const d = new Date()
  return String(d.getMinutes()).padStart(2, '0') + ':' + String(d.getSeconds()).padStart(2, '0')
}

function animCounter(setter, from, to, suffix, duration) {
  const start = Date.now()
  const tick = () => {
    const p = Math.min((Date.now() - start) / duration, 1)
    const ease = 1 - Math.pow(1 - p, 3)
    setter(Math.round(from + (to - from) * ease) + suffix)
    if (p < 1) requestAnimationFrame(tick)
  }
  tick()
}

const initialModelState = () =>
  Object.fromEntries(MODELS.map(m => [m.id, { progress: 0, lat: null, tok: null }]))

export function useFusion() {
  const [logs, setLogs]           = useState([{ type: 'info', msg: 'System ready. 4 models initialised.', time: '00:00' }, { type: 'ok', msg: 'Consensus mode selected', time: '00:01' }])
  const [modelState, setModelState] = useState(initialModelState())
  const [responseText, setResponseText] = useState('')
  const [isTyping, setIsTyping]   = useState(false)
  const [verified, setVerified]   = useState(false)
  const [running, setRunning]     = useState(false)
  const [agreeBar, setAgreeBar]   = useState(0)
  const [agreeVal, setAgreeVal]   = useState('—')
  const [latencyVal, setLatencyVal] = useState('—')
  const [tokensVal, setTokensVal] = useState('—')
  const [costVal, setCostVal]     = useState('—')
  const timers = useRef([])

  const addLog = useCallback((type, msg) => {
    setLogs(prev => [...prev, { type, msg, time: ts() }])
  }, [])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const run = useCallback((prompt) => {
    clearTimers()
    setRunning(true)
    setVerified(false)
    setResponseText('')
    setIsTyping(false)
    setAgreeBar(0)
    setAgreeVal('—')
    setLatencyVal('—')
    setTokensVal('—')
    setCostVal('—')
    setModelState(initialModelState())

    addLog('info', `Dispatching: "${prompt.slice(0, 30)}${prompt.length > 30 ? '…' : ''}"`)

    MODELS.forEach(m => {
      const t1 = setTimeout(() => {
        addLog('info', `${m.name} → generating response…`)
        let pct = 0
        const iv = setInterval(() => {
          pct = Math.min(pct + 3, 100)
          setModelState(prev => ({ ...prev, [m.id]: { ...prev[m.id], progress: pct } }))
          if (pct >= 100) {
            clearInterval(iv)
            setModelState(prev => ({ ...prev, [m.id]: { progress: 100, lat: m.lat, tok: m.tok } }))
            addLog('ok', `${m.name} completed (${m.lat}ms)`)
          }
        }, m.lat / 33)
        timers.current.push(iv)
      }, m.delay)
      timers.current.push(t1)
    })

    const t2 = setTimeout(() => addLog('warn', 'Peer-review pass 1 — cross-checking responses…'), 1600)
    const t3 = setTimeout(() => {
      addLog('ok', 'Agreement score: 94% across models')
      addLog('info', 'Synthesising final response…')
    }, 2200)

    const t4 = setTimeout(() => {
      setAgreeBar(94)
      animCounter(setAgreeVal, 0, 94, '%', 800)
      animCounter(setLatencyVal, 0, 715, 'ms', 900)
      animCounter(setTokensVal, 0, 1138, '', 1000)
      setTimeout(() => setCostVal('$0.014'), 400)

      // Typewriter
      setIsTyping(true)
      setResponseText('')
      let i = 0
      const type = () => {
        if (i <= SAMPLE_RESPONSE.length) {
          setResponseText(SAMPLE_RESPONSE.slice(0, i))
          i++
          const delay = SAMPLE_RESPONSE[i] === ' ' ? 12 : 22
          const tid = setTimeout(type, delay)
          timers.current.push(tid)
        } else {
          setIsTyping(false)
          setVerified(true)
          setRunning(false)
          addLog('ok', 'Consensus response finalised ✓')
        }
      }
      type()
    }, 2600)

    timers.current.push(t2, t3, t4)
  }, [addLog])

  return { logs, modelState, responseText, isTyping, verified, running, agreeBar, agreeVal, latencyVal, tokensVal, costVal, run, addLog, MODELS }
}
