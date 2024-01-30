const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const api = express();

const router = express.Router();
router.get("/hello", (req, res) => {
    res.send("Hello World")
})

api.use("/api/",router);

export const handler = serverless(api);