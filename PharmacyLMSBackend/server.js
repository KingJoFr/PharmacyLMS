const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;