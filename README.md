# wizCommerce
The project for my wiz Commerce project 

# 📘 wizCommerce Project – BookMySlot

A **mini-Calendly style scheduling app** built with **Node.js, Express, PostgreSQL**, and a **minimal HTML/JS frontend**.

Users can:
- ✅ Create events with available time slots
- ✅ List public events
- ✅ Book slots with email/name
- ✅ Prevent double-booking
- ✅ View their own bookings
- ✅ Get time-zone adjusted slots on the browser

---

## 💻 Requirements

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [PostgreSQL](https://www.postgresql.org/) (local or cloud instance)

---

## 🔧 Setup Instructions

### 1. 📦 Clone the repository

```bash
git clone https://github.com/yourusername/book-my-slot.git
cd book-my-slot/backend```

````
## 2. 📁 Install dependencies
```bash
npm install
````
## 3. ⚙️ Create .env file in /backend
```bash
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/your_db

````
Replace your_user, your_password, and your_db accordingly.
## 4. 🗃️ Set up PostgreSQL database
```bash
psql -U your_user -d your_db -f schema.sql

````
## 5. ▶️ Start the backend server
```bash
node app.js
````
By default, the backend runs at: http://localhost:3000
## ✨ Features
✅ Create & store events with time slots

📋 Public listing of created events

🧑‍💻 Book slots with name & email

❌ Prevent overbooking and double booking

🕓 Timezone-adjusted slot times using toLocaleString()

🔍 View all bookings via email lookup

