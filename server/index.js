const express = require("express");
require('dotenv').config()

const Connection = require("./database/db");

const app = express();

const PORT = 5000;

Connection(process.env.MONGO_URI);

app.listen(PORT, console.log("server running at", PORT));
