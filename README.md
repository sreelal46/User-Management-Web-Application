# 👥 User Management System

A full-stack **User Management Web Application** built using **Node.js, Express.js, MongoDB, and Handlebars**.  
This project includes both **User** and **Admin** features with authentication, CRUD operations, and personalized dashboards.

---

## 🚀 Features

### User

- 🔑 User Registration & Login
- 🏠 Personalized Home Page

### Admin

- 🔑 Admin Login
- ➕ Add New Users
- ✏️ Edit Existing Users
- ❌ Delete Users
- 🔍 Search Users

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: Handlebars, Bootstrap, CSS
- **Authentication**: bcrypt, express-session
- **Environment Variables**: dotenv

---

## 📂 Project Structure

📦 user-management
┣ 📂 controller # Controller logic for users/admin
┣ 📂 db # Database connection
┣ 📂 middleware # Authentication & validation middleware
┣ 📂 model # Mongoose models
┣ 📂 public # Static files (CSS, JS, images)
┣ 📂 routes # Application routes
┣ 📂 views # Handlebars templates
┣ 📜 .env # Environment variables (not tracked in git)
┣ 📜 .gitignore # Ignored files
┣ 📜 server.js # Application entry point
┣ 📜 package.json # Project metadata & dependencies

---

## ⚙️ Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/user-management.git
   cd user-management
   ```
   2.Install dependencies

npm install

3.Create a .env file in the root directory and add:

PORT=5000
SESSION_SECRET=your_secret_key

4.Run the server

npm start
