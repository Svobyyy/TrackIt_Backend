const express = require("express");
const mongoose = require("mongoose");
const dotnev = require("dotenv");

dotnev.config();
const PORT = process.env.PORT || 3001;
const CONNECTION = process.env.CONNECTION;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE, PUT");
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

(async () => {
  try {
  await mongoose.connect(CONNECTION)
  app.listen(PORT)
} catch (err) {
  console.log(err)
}
})()


