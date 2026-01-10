✨ Features
Core Features

🔐 Authentication & Authorization with JWT
💬 Real-time Messaging with Socket.io
👤 User Profiles with avatar upload
📷 Image Sharing in chats
🟢 Online/Offline Status indicators
📧 Welcome Emails with Resend
🔒 Security Protection with Arcjet
🎨 Modern UI with responsive design

Technical Features

⚡ Real-time Updates - Instant message delivery
🖼️ Cloud Storage - Images stored on Cloudinary
🔑 Secure Authentication - HTTP-only cookies with JWT
🛡️ Rate Limiting - DDoS protection with Arcjet
🤖 Bot Detection - Malicious bot blocking
📱 Responsive Design - Works on all devices
♻️ Auto-reconnect - Persistent WebSocket connections

🛠️ Tech Stack
Frontend

React - UI library
Vite - Build tool
Tailwind CSS - Styling
Zustand - State management
Socket.io Client - Real-time communication
Axios - HTTP client
React Router - Navigation
React Hot Toast - Notifications

Backend

Node.js - Runtime environment
Express.js - Web framework
MongoDB - Database
Mongoose - ODM
Socket.io - Real-time engine
JWT - Authentication
bcryptjs - Password hashing
Cloudinary - Image storage
Resend - Email service
Arcjet - Security & rate limiting

DevOps & Deployment

Render.com - Hosting platform
MongoDB Atlas - Cloud database
GitHub - Version control
Nodemon - Development server

1. Clone Repository
   bashgit clone https://github.com/your-username/chatify.git
   cd chatify

2. Backend Setup
   bashcd backend
   npm install
   Create .env file:
   env# MongoDB
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chatify

Start backend:
bashnpm run dev
Backend runs on: http://localhost:3000 3. Frontend Setup
bashcd frontend
npm install
Create .env file:
envVITE_API_URL=http://localhost:3000
Start frontend:
bashnpm run dev
Frontend runs on: http://localhost:5173
