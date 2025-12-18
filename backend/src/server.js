import express from 'express'

import { connectDB } from './lib/db.js'
import { ENV } from './lib/env.js'
import authRouters from './routes/auth.route.js'
import messageRouters from './routes/message.route.js'

const app = express()

const PORT = ENV.PORT || 3000

app.use(express.json()) // req.body

app.use('/api/auth', authRouters)
app.use('/api/messages', messageRouters)

app.listen(PORT, () => {
	console.log('Server is running on port:' + PORT)
	connectDB()
})
