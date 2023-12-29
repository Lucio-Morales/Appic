const { Router } = require("express");
const { imagesControllers } = require("../controllers");

const imagesRouter = Router();

imagesRouter.get("/:userId", imagesControllers.getSpecificImage);

module.exports = imagesRouter;
