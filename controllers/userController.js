//const ObjectID , what does this do?  why do we need to tell mongoose about it?
const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

//making functions , for example createUser, to be exported to userRoutes, to be assigned a URL path the front end can use
module.exports = {
	//defining a function , createUser, to be exported to userRoutes, to be assigned a URL path
	createUser(req, res) {
		// .create is probably a mongoose function that makes an instance of "User"out of the info in the req.body
		console.log("! ! ! you are creating a new user in userController.js ! ! !");
		User.create(req.body)
			.then((user) => res.json(user))
			.catch((err) => res.status(500).json(err));
	},

	//delete a user
	deleteUser(req, res) {
		console.log("! ! ! you are deleting a user In userController.js... !");
		User.findOneAndDelete({ _id: req.params.iD })
			.then((user) =>
				!user
					? res.status(404).json({ message: "no user found by that ID" })
					: Thought.deleteMany({ _id: { $in: user.thoughts } })
			)
			.then(() => res.json({ message: "User has been deleted!" }))
			.catch((err) => res.status(500).json(err));
	},

	//getAllUsers(req, res) {}
	//getOneUser(req, res) {}
};
