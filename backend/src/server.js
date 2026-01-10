import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'

import { connectDB } from './lib/db.js'
import { ENV } from './lib/env.js'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'

const app = express()

const PORT = ENV.PORT || 3000

app.use(express.json({ limit: '5mb' })) // req.body - 5MB gacha
app.use(express.urlencoded({ limit: '5mb', extended: true })) // URL-encoded data uchun

app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }))
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

app.listen(PORT, () => {
	console.log('Server is running on port:' + PORT)
	connectDB()
})
