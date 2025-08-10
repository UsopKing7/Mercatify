import { PrismaClient } from '@prisma/client'
import { errorFormat } from '../utils/format-error.utils'

export const prisma = new PrismaClient()

export const checkConnectPrisma = async () => {
  try {
    await prisma.$connect()
    console.log('[OK][PRISMA] successful connect')
  } catch (error) {
    console.log('[ERROR][PRISMA] connect failed')
    console.log(errorFormat(error))
  }
}

process.on('SIGINT', async () => {
  try {
    await prisma.$disconnect()
    console.log('[OK][PRISMA] successful disconect')
    process.exit(0)
  } catch (error) {
    console.log('[ERROR][PRISMA] failed to exit')
    console.log(errorFormat(error))
    process.exit(1)
  }
})
