import express from 'express'
import dotenv from 'dotenv'
import clients from './interfaces/routes/clients.js'

dotenv.config()

const app = express()

const PORT = process.env.APP_PORT || 8000

app.use(express.json())

app.use('/api/clients', clients)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
