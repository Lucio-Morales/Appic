const { Router } = require("express");
const usersRouter = require("./usersRouter");
const imagesRouter = require("./imagesRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter).use("/images", imagesRouter);

module.exports = mainRouter;
