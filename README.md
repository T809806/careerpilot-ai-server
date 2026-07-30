# 🚀 CareerPilot AI - Server

This is the backend API for CareerPilot AI. It provides secure authentication, career management APIs, AI recommendation support, and JWT-based protected routes.

---

## 🌐 Server URL

`https://your-server-link.onrender.com`

---

## ✨ Features

* JWT Authentication
* Secure Cookie Authentication
* Protected APIs
* Add Career
* Delete Career
* Manage Careers
* Career Details API
* Explore Careers API
* Search Careers
* Filter Careers
* Salary Sorting
* Pagination
* MongoDB Database
* Express Middleware
* CORS Configuration
* Environment Variable Support

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* TypeScript
* MongoDB Atlas
* JWT
* Cookie Parser
* Dotenv
* Cors

---

## 📦 NPM Packages

* express
* mongodb
* jsonwebtoken
* cookie-parser
* cors
* dotenv
* tsx
* typescript

---

## ⚙️ Installation

Clone repository

```bash
git clone <server-repository-url>
```

Move to project

```bash
cd server
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file.

```env
PORT=5000

DB_USER=your_db_user
DB_PASS=your_db_password

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## 📌 API Endpoints

### Careers

* GET `/api/careers`
* GET `/api/careers/:id`
* GET `/api/careers/manage`
* POST `/api/careers`
* DELETE `/api/careers/:id`

### AI

* POST `/api/ai/recommendation`
* POST `/api/ai/cover-letter`

### JWT

* POST `/jwt`
* POST `/logout`

---

## 🔒 Security

* JWT Authentication
* HTTP Only Cookies
* Environment Variables
* Protected Routes
* CORS Enabled

---

## 👩‍💻 Developed By

**Tahiya Akter**
