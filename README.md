# wizCommerce
The project for my wiz Commerce project 

# BookMySlot – Fullstack Scheduling App

A mini-Calendly app built with Node.js, Express, PostgreSQL, and minimal HTML/JS.  
Users can create events, view them, book slots, and see their bookings.

---

## 💻 Requirements

- Node.js (v16+ recommended)
- PostgreSQL

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/book-my-slot.git
cd book-my-slot/backend
2. Install dependencies
bash
Copy
Edit
npm install
3. Create .env file
env
Copy
Edit
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/your_db
Replace your_user, your_password, and your_db accordingly.

4. Set up the PostgreSQL database
bash
Copy
Edit
psql -U your_user -d your_db -f schema.sql
5. Run the backend server
bash
Copy
Edit
node app.js
By default it runs on: http://localhost:3000

🌐 Frontend Usage
Navigate to frontend/ folder and open these HTML files in your browser:

index.html – List events

create-event.html – Create new event

event.html?id=123 – Book a slot (replace ID)

my-bookings.html – View all your bookings by email

✨ Features
Create events with time slots

Public listing of events

Book time slots

Prevent overbooking or double-booking

View your past bookings

Time zone conversion supported on frontend (via JS)

📦 Project Structure
pgsql
Copy
Edit
book-my-slot/
├── backend/
│   ├── app.js
│   ├── db.js
│   ├── schema.sql
│   ├── routes/
│   └── controllers/
├── frontend/
│   ├── index.html
│   ├── create-event.html
│   ├── event.html
│   └── my-bookings.html
