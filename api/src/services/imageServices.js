const fs = require("node:fs");

const uploadImage = (file) => {
  const newPath = `./uploads/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  // return { msg: "Imagen guardada con exito", imagePath: newPath };
  // return newPath;
};

const uploadImages = (files) => {
  files.map(uploadImage);
  return { msg: "imagenes guardads exitosamente." };
};

module.exports = {
  uploadImage,
  uploadImages,
};
