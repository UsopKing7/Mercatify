import { app } from './server'
import { PORT } from './shared/constants/env'
import { checkConnectPrisma } from './shared/constants/db'
import { checkConnectRedis } from './shared/constants/redis'

checkConnectPrisma()
checkConnectRedis()

app.listen(PORT, '::', () => {
  console.table({
    URL: `http://localhost:${PORT}`,
    ipv6: `http://[::]:${PORT}`,
    ipv4: `http://127.0.0.1:${PORT}`
  })
})
