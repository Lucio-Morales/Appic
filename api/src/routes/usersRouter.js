const { Router } = require("express");
const { usersControllers } = require("../controllers");

const usersRouter = Router();

usersRouter
  .post("/create", usersControllers.createUserDemo)
  .post("/login", usersControllers.userLogin)
  .get("/all", usersControllers.getAllUsers)
  .get("/:userId", usersControllers.getSpecificUser);

module.exports = usersRouter;
