const { Router } = require("express");
const multer = require("multer");
const { imagesControllers } = require("../controllers");

const imagesRouter = Router();
const upload = multer({ dest: "uploads/" });

imagesRouter
  .post("/upload", upload.single("myFirstImage"), imagesControllers.postImage)
  .post(
    "/upload/multi",
    upload.array("photos", 10),
    imagesControllers.postImages
  );
module.exports = imagesRouter;
