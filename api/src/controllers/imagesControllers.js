const getSpecificImage = (req, res) => {
  const { userId } = req.params;
  try {
    const response = null;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSpecificImage,
};
