💰 Money Manager – Full Stack Application

A full-stack Money Manager web application that allows users to register, log in, track income and expenses, view transaction history, and manage their profile.
Built with React on the frontend and Node.js + Express + MongoDB on the backend.

🔗 Live Demo

Frontend (Netlify):
👉 https://guvifullstackproject.netlify.app/

Backend API (Render):
👉 https://money-manager-2-suj4.onrender.com

Note: The backend is an API service, so visiting the root URL may show Cannot GET /. This is expected.

🧩 Features
Authentication

User registration and login

User-specific data isolation

Secure API-based communication

Transactions

Add income and expense transactions

View transaction history

Filter by category, division, and date range

Edit transactions only within 12 hours of creation

Delete transactions with confirmation

Dashboard

Total income and total expense summary

Visual income vs expense chart

Profile

View and update user profile

Profile page centered and styled

Logout functionality

🛠️ Tech Stack
Frontend

React

React Router

Axios

Tailwind CSS

Framer Motion

Deployed on Netlify

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

Deployed on Render

📁 Project Structure
Money-Manager/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.jsx
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   ├── models/
│   ├── config/
│   └── ...
│
└── README.md

⚙️ Environment Variables
Backend (Render)
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/money-manager
PORT=5000


MongoDB Atlas Network Access must allow 0.0.0.0/0

Frontend (Netlify)
REACT_APP_API_URL=https://your-backend.onrender.com


Used inside:

frontend/src/services/api.js

🚀 Deployment Process
Backend Deployment (Render)

Create a Web Service

Connect GitHub repository

Set Root Directory to backend

Build Command: npm install

Start Command: npm start

Add environment variables

Deploy

Frontend Deployment (Netlify)

Create site from GitHub

Set Base Directory to frontend

Build Command: npm run build

Publish Directory: frontend/build

Add _redirects file for SPA routing

Deploy

🧪 Local Development
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm start

🔐 Business Rules

Each user can access only their own data

Transactions can be edited only within 12 hours of creation

Backend enforces all security rules; frontend mirrors them for better UX

📌 Notes

createdAt timestamp is used to control edit permissions

Backend APIs are REST-based

Frontend and backend are deployed independently

Monorepo structure with a single GitHub repository
