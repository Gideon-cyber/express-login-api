const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const { default: mongoose } = require("mongoose");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

// mongoose
//   .connect(url)
//   .then(() => {
//     console.log("Connected to MongoDB successfully");
//   })
//   .catch((err) => {
//     console.log("Error connecting to MongoDB", err);
//   });
connectDb();
const app = express();

const port = process.env.PORT || 7000;

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
