const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "DevSecOps API is running 🚀"
    });
});
app.post("/execute", (req, res) => {
    const result = eval(req.body.code);

    res.json({
        result,
    });
});

module.exports = app;