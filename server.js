console.clear();
// import express
const express = require("express");
const connectDB = require("./config/connectDB");
const userRouter = require("./router/user");
const productRouter = require("./router/product");
const orderRouter = require("./router/Order");

// instance app
const app = express();
require("dotenv").config();

connectDB();

// router
// user
//
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

// PORT
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
