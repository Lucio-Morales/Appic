const { Router } = require("express");
const { usersControllers } = require("../controllers");

const usersRouter = Router();

usersRouter
  .post("/create", usersControllers.postUser)
  .post("/login", usersControllers.loginUser)
  .get("/all", usersControllers.getUsers)
  .get("/:userId", usersControllers.getUser);

module.exports = usersRouter;
