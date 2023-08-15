const express = require("express");
require("dotenv").config();
const cors = require("cors");

const Connection = require("./database/db");
const Routes = require("./routes/route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

const PORT = 5000;

Connection(process.env.MONGO_URI);

app.listen(PORT, console.log("server running at", PORT));
