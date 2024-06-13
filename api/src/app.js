const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { FRONTEND_ORIGIN } = process.env;
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const app = express();

app.use(
  cors({
    origin: FRONTEND_ORIGIN, // Asegúrate de que coincida con la URL de tu frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Permitir cookies y credenciales
  })
);
app.use(express.json());
app.use(cookieParser());
// app.options(
//   "*",
//   cors({
//     origin: FRONTEND_ORIGIN,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );
app.use(morgan("dev"));

app.use("/", routes);

module.exports = app;
