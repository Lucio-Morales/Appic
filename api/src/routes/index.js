const {Router} = require("express");
const userRoutes = require("./userRoutes")

const routes = Router()

routes.use("/user", userRoutes)

module.exports = routes