# Converso - MERN Real-time Chat

**Live demo:** https://converso-frtt.onrender.com

A simple, real-time chat application built with the MERN stack and Socket.IO. Features user authentication, conversations, real-time messaging, online presence, and notification sound.

---

## Quick start

1. Clone the repo and install dependencies:

   ```bash
   npm install
   npm install --prefix frontend
   ```

2. Create a `.env` in the `backend/` folder (example below).

3. Run development servers (two terminals):

   ```bash
   npm run server            # starts backend (nodemon)
   npm run dev --prefix frontend   # starts frontend (Vite)
   ```

4. Production build + serve:

   ```bash
   npm run build    # builds frontend
   npm start        # runs backend which serves the built frontend
   ```

---

## Environment variables (backend `.env`)

Create `backend/.env` with at minimum:

```env
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000            # optional
NODE_ENV=development # optional
```

- `MONGO_DB_URI` — MongoDB connection string used by `backend/db/connectToMongodb.js`.
- `JWT_SECRET` — used for JWT cookie generation in `backend/utils/generateToken.js`.

---

## Features

- Email/password signup & login (JWT cookie)
- Create/view conversations and messages
- Real-time messaging with `socket.io`
- Online users indicator
- Notification sound for incoming messages

---

## Tech stack

- Backend: Node.js, Express, MongoDB (Mongoose), Socket.IO
- Frontend: React + Vite, Tailwind CSS
- Auth: JWT (HTTP-only cookie)

---

## Project structure (important files)

- `backend/server.js` — Express + static file serving
- `backend/db/connectToMongodb.js` — MongoDB connection
- `backend/routes/*` — REST API endpoints
- `frontend/src` — React app (Vite)
- `frontend/src/context/SocketContext.jsx` — socket client

---

## API (brief)

Base path: `/api`

- `POST /api/auth/signup` — create user
- `POST /api/auth/login` — login
- `POST /api/messages/send/:conversationId` — send message
- `GET /api/messages/:conversationId` — get messages
- `GET /api/users` — list conversations/users

(See `backend/routes/` for full details.)

---
