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
		//_id is a mongoDB key, id is parsed from the url used
		User.findOneAndDelete({ _id: req.params.Id }),
			(err, result) => {
				if (result) {
					res.status(200).json(result);
					console.log(`You have deleted a user`);
				} else {
					console.log("Uh Oh, something went wrong");
					res.status(500).json({ message: "something went wrong" });
				}
			};
	},
	//getAllUsers(req, res) {}
	//getOneUser(req, res) {}
};
