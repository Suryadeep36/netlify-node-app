const express = require('express');
const serverless = require('serverless-http');

const api = express();

const router = express.Router();
router.get("/hello", (req, res) => {
    res.send("Hello world");
})

api.use("/api/",router);

export const handler = serverless(api);