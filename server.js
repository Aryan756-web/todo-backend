const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database connection
connectDB();

// routes
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});