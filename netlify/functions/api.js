const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const api = express();

const router = express.Router();
router.get("/hello", (req, res) => {
    res.sendFile(path.resolve("index.html"));
})

api.use("/api/",router);

export const handler = serverless(api);