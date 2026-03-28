# Todo Backend API

## Learning Notes
This project was reworked after feedback to improve my understanding of CRUD APIs, React hooks, and frontend-backend integration.
I tested all routes using Postman and verified full frontend functionality.

## Setup

1. Install dependencies
   npm install

2. Create a .env file in backend folder
   PORT=5000
   MONGO_URI=your_mongodb_connection_string

3. Run the server
   npm start

---

## Base URL

Local:
http://localhost:5000/api/todos

Deployed:
https://todo-backend-oh0s.onrender.com/api/todos

---

## API Endpoints

GET /

* get all todos

POST /

* create new todo
* body: { title }

PUT /:id

* update todo

DELETE /:id

* delete todo

GET /search?q=keyword

* search todos

---

## Testing

All APIs tested using Postman.

---

## Notes

* Built using Node.js and Express
* MongoDB used for database
* Basic error handling used

---

## Postman Testing Screenshots

All API endpoints were tested successfully using Postman.

Screenshots are available inside the `screenshots` folder:

- Get-all.png
- create-todo.png
- update-task.png
- update-status.png
- search.png
- delete.png
