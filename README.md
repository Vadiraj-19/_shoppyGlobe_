# 🛠️ MERN Auth + Products API

A simple MERN (MongoDB, Express, React, Node.js) stack project with basic **User Registration**, **Login** (JWT), and a mock **Products API**.

---

## 📁 Project Structure

```
backend/
  |-- model/
  |     |-- User.js
  |-- Router/
  |     |-- user.js
  |     |-- product.js
  |-- server.js

frontend/
  |-- src/
        |-- pages/
              |-- Register.jsx
              |-- Login.jsx
              |-- BrowseProducts.jsx
```

---

## 🚀 Features

* ✅ User Registration (with bcrypt password hashing)
* ✅ Login with JWT token
* ✅ Protected route for Products
* ✅ Error handling on both frontend and backend

---

## 🔧 Backend Setup

### 1. Install Dependencies

```bash
cd backend
npm install express mongoose bcryptjs jsonwebtoken dotenv cors
```

### 2. Create `.env`

```
MONGO_URI=mongodb://localhost:27017/Details
JWT_SECRET=your_jwt_secret_key
```

### 3. Start Backend

```bash
node server.js
```

### ✅ API Routes

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | /api/users/register | Register a user         |
| POST   | /api/users/login    | Login user + return JWT |
| GET    | /api/products       | Get list of products    |

---

## 🌐 Frontend Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Run React App

```bash
npm run dev
```

Make sure Vite is configured properly if using Vite. Otherwise, use `create-react-app` default commands.

---

## 🔐 Register + Login Logic

* Registration sends `username` and `password` to backend.
* Password is hashed with `bcryptjs` and stored.
* Login sends credentials, verifies using `bcrypt.compare`, returns a `JWT token`.
* Token can be used for protected routes in the future.

---

## 📦 Sample Product Data

```json
[
  { "id": 1, "name": "Product A", "price": 100 },
  { "id": 2, "name": "Product B", "price": 200 }
]
```

---

## 👨‍💻 Author

**Vadiraj Betageri**
Aspiring Full-Stack Developer | Built during Full-Stack Internship

---

## 📜 License

This project is open-source for educational purposes.
