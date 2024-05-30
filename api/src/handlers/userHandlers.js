const { userServices } = require("../services");


const postUser = (req, res) => {
    const { msg } = req.query;
    const serviceResponse = userServices.createNewUser(msg)
    return res.status(200).send(serviceResponse)
}

module.exports = {
    postUser
}