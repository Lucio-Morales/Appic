const {Router} = require("express");
const { userHandlers } = require("../handlers");

const userRoutes = Router()

userRoutes.post("/post", userHandlers.postUser)

module.exports = userRoutes
