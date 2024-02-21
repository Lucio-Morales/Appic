const { imageServices } = require("../services");

// Almacena una imagen
const postImage = (req, res) => {
  const { file } = req;
  try {
    const serviceResponse = imageServices.uploadImage(file);
    res.status(200).json(serviceResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Almacena multiples imagenes
const postImages = (req, res) => {
  const { files } = req;
  try {
    const serviceResponse = imageServices.uploadImages(files);
    res.status(200).json(serviceResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postImage, postImages };
