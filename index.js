require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// routes
const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
