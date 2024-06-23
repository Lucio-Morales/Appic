const { Router } = require('express');
const { userHandlers } = require('../handlers');

const userRoutes = Router();

userRoutes
	.post('/post', userHandlers.postUser)
	.post('/login', userHandlers.loginUser)
	.get('/profile', userHandlers.userProfile);

module.exports = userRoutes;
