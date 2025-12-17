import dotenv from 'dotenv'
import express from 'express'

import { connectDB } from './lib/db.js'
import authRouters from './routes/auth.route.js'
import messageRouters from './routes/message.route.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json()) // req.body

app.use('/api/auth', authRouters)
app.use('/api/messages', messageRouters)

app.listen(PORT, () => {
	console.log('Server is running on port:' + PORT)
	connectDB()
})
