const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const db = require("./db"); // Assuming db.js is in the same directory
db.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Database connected successfully:", res.rows[0].now);
    }
    });


const PORT = process.env.PORT || 3000;

