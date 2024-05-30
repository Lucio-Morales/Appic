const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use("/", routes);

module.exports = app;