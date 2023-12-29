const { Router } = require("express");
const { usersControllers } = require("../controllers");

const usersRouter = Router();

usersRouter
  .post("/create", usersControllers.postUser)
  .get("/all", usersControllers.getAllUsers)
  .get("/:userId", usersControllers.getSpecificUser);

module.exports = usersRouter;
