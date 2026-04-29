export const loggerConfig = {
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  transport: process.env.NODE_ENV === 'production' ? undefined : { target: 'pino-pretty' },
  redact: ['req.headers.authorization', 'req.headers.cookie']
};
