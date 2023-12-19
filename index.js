const express = require("express");
const mongoose = require("mongoose");
const dotnev = require("dotenv");

dotnev.config();
const PORT = process.env.PORT || 3001;
const CONNECTION = process.env.CONNECTION;

const app = express();
app.use(express.json());
// app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const productRouter = require("./routes/product");
const dateRouter = require('./routes/date')

app.use(productRouter);
app.use(dateRouter);

app.get("/", (req, res) => {
  res.status(200);
  res.json({ name: "karel" });
});

app.get("*", (req, res) => {
  res.status(400);
  res.json("Not Found");
});

mongoose
  .connect(CONNECTION)
  .then(app.listen(PORT))
  .catch((err) => {
    console.log(err);
  });
// app.listen(3000)
