const express = require("express");

const app = express();

app.use(express.json());
const helmet = require("helmet");

app.use(helmet());
app.get("/", (req, res) => {
    res.json({
        message: "DevSecOps API is running 🚀"
    });
});


module.exports = app;