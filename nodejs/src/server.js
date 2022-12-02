const express = require("express");
const cors = require("cors");
const connectDB = require('./config/connectDB');
const viewEngine = require('./config/viewEngine');
const bodyParser = require('body-parser');
const initWebRoutes = require('./route/web');

// import express from "express";
// import bodyParser from "body-parser";
// import viewEngine from "./config/viewEngine";
// import initWebRoutes from './route/web';
// import connectDB from './config/connectDB';
// import cors from 'cors';
// import { createJWT, verifyToken } from './JWToken';

require('dotenv').config();

let app = express();
app.use(cors({ origin: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
viewEngine(app);
initWebRoutes(app);

connectDB();

//test jwt
// createJWT();
// let decodedData = verifyToken("")
// console.log(decodedData)

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("backend nodejs is runing on the port : " + port)
})