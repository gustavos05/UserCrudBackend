const { getAll,create,remove,update,getOneUser } = require('../controllers/users.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
        .post(create)
userRouter.route('/:id')
        .delete(remove)
        .put(update)
        .get(getOneUser)

module.exports = userRouter;