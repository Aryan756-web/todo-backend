# To-Do List App (MERN)

## About the Project

This project is a simple full-stack To-Do application built using the MERN stack. The main goal was to understand how frontend and backend communicate using APIs and how data is stored in MongoDB.

Users can add tasks, mark them as completed, and delete them. All changes are saved in the database and reflected immediately on the UI.

---

## Features

* Add new tasks
* Mark tasks as complete/incomplete
* Delete tasks
* Data stored in MongoDB Atlas
* UI updates instantly after actions

---

## Tech Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB Atlas

---

## API Endpoints

* GET /api/todos → get all tasks
* POST /api/todos → create a task
* PUT /api/todos/:id → update task
* DELETE /api/todos/:id → delete task

---

## How to Run Locally

### Backend

1. Go to backend folder
2. Install dependencies:
   npm install
3. Create a `.env` file and add:
   MONGO_URI=your_mongodb_uri
4. Start server:
   npm run dev

---

### Frontend

1. Go to frontend folder
2. Install dependencies:
   npm install
3. Start app:
   npm start

---

## Live Links

Frontend: (add your Netlify link here)
Backend: https://todo-backend-oh0s.onrender.com

---

## Challenges Faced

* Initially, data was getting stored in the wrong database (`test`) because I didn’t specify the DB name in the MongoDB URI
* Faced connection timeout error while deploying on Render, fixed by allowing network access in MongoDB Atlas
* Had issues connecting frontend and backend at first, especially with API URLs and CORS

---

## What I Learned

* How REST APIs work in real projects
* Connecting React frontend with Express backend
* Debugging real-world issues (MongoDB, deployment, API errors)
* Importance of correct environment variables

---

## Future Improvements

* Add user authentication
* Add edit task feature
* Improve UI design
