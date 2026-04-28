import { useCallback } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import PromptArea from './components/PromptArea'
import ModelGrid from './components/ModelGrid'
import ResponsePanel from './components/ResponsePanel'
import LogPanel from './components/LogPanel'
import AnalyticsPanel from './components/AnalyticsPanel'
import { useFusion } from './hooks/useFusion'
import styles from './App.module.css'

export default function App() {
  const {
    logs, modelState, responseText, isTyping, verified,
    running, agreeBar, agreeVal, latencyVal, tokensVal, costVal,
    run, addLog, MODELS,
  } = useFusion()

  function handleModeChange(mode) {
    addLog('info', `Switched to ${mode} mode`)
  }

  const handleRegenerate = useCallback(() => {
    run('Explain quantum computing')
  }, [run])

  return (
    <div className={styles.shell}>
      <Topbar />
      <Sidebar onModeChange={handleModeChange} />

      <main className={styles.main}>
        <PromptArea onRun={run} running={running} />
        <ModelGrid models={MODELS} modelState={modelState} />
        <ResponsePanel
          text={responseText}
          isTyping={isTyping}
          verified={verified}
          onRegenerate={handleRegenerate}
        />
      </main>

      <aside className={styles.rightPanel}>
        <LogPanel logs={logs} />
        <AnalyticsPanel
          agreeBar={agreeBar}
          agreeVal={agreeVal}
          latencyVal={latencyVal}
          tokensVal={tokensVal}
          costVal={costVal}
        />
      </aside>
    </div>
  )
}
