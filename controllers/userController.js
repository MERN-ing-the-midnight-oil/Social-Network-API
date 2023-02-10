//const ObjectID , what does this do?  why do we need to tell mongoose about it?
const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

//making functions , for example createUser, to be exported to userRoutes, to be assigned a URL path the front end can use
module.exports = {
	//creates a new user
	createUser(req, res) {
		User.create(req.body)
			.then((user) => res.json(user))
			.catch((err) => res.status(500).json(err));
	},
	//deleteUser(req, res) {}
	//getAllUsers(req, res) {}
	//getOneUser(req, res) {}
};
