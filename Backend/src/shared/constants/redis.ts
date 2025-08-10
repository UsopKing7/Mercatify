import { createClient } from 'redis'
import { REDIS_URL } from './env'
import { errorFormat } from '../utils/format-error.utils'

export const redis = createClient({
  url: REDIS_URL
})

redis.on('connect', () => {
  console.log('[OK][REDIS] successful connect')
})

redis.on('error', (error) => {
  console.log('[ERROR][REDIS] connect failed')
  console.log(errorFormat(error))
})

redis.on('end', () => {
  console.log('[WARN][REDIS] disconnected');
});

redis.on('reconnecting', () => {
  console.log('[INFO][REDIS] reconnecting...');
});


export const checkConnectRedis = async () => {
  try {
    await redis.connect()
  } catch (error) {
    console.log(errorFormat(error))
  }
}

process.on('SIGINT', async () => {
  try {
    await redis.$disconnect()
    console.log('[OK][REDIS] successful disconect')
    process.exit(0)
  } catch (error) {
    console.log('[ERROR][REDIS] failed to exit')
    console.log(errorFormat(error))
    process.exit(1)
  }
})


