import crypto from 'crypto';

export function generateApiKey() {
  return `nrf_${crypto.randomBytes(24).toString('hex')}`;
}
