const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const api = express();

const router = express.Router();
router.get("/hello", (req, res) => {
    res.send("Hello World")
})
api.use(expess.static(path.join(__dirname, 'public')));
api.get("*",(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
api.use("/api/",router);

export const handler = serverless(api);