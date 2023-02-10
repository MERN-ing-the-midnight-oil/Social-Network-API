//const ObjectID , what does this do?  why do we need to tell mongoose about it?
const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

module.exports = {
	//create a new user, good example on the mini-project student controller
	createUser(req, res) {
		User.create(req.body)
			.then((user) => res.json(user))
			.catch((err) => res.status(500).json(err));
	},
	//deleteUser(req, res) {}
	//getAllUsers(req, res) {}
	//getOneUser(req, res) {}
};
