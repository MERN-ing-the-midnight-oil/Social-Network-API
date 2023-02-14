const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

//making functions , for example createUser, to be exported to userRoutes, to be assigned a URL path the front end can use
module.exports = {
	//Create user
	createUser(req, res) {
		// .create is probably a mongoose function that makes an instance of "User"out of the info in the req.body
		console.log("! ! ! you are creating a new user in userController.js ! ! !");
		User.create(req.body)
			.then((user) => res.json(user))
			.catch((err) => res.status(500).json(err));
	},
	//find all users
	getUsers(req, res) {
		console.log("! ! ! you are finding all users! !");
		User.find()
			.then((users) => res.json(users))
			.catch((err) => res.status(500).json(err));
	},

	//Delete User
	deleteUser(req, res) {
		console.log("! ! ! you are deleting a user In userController.js... !");
		//_id is a mongoDB key, id is parsed from the url used
		User.findOneAndDelete({ _id: req.params.userId }).then((data) => {
			console.log("* * *here is the delete user data: " + data);
			if (data) {
				console.log("! ! ! you have delete a user! ! ");
				return res.status(200).json(data);
			} else {
				console.log("Uh Oh, something went wrong");
				res.status(500).json({ message: "something went wrong" });
			}
		});
	},
	//Find user by id
	getSingleUser(req, res) {
		console.log(
			"! ! ! you are getting a single user In userController.js... !"
		);
		//_id is a mongoDB key, id is parsed from the url used
		User.findOne({ _id: req.params.userId }).then((data) => {
			console.log(
				"* * * here is the single user data for getting a single user: " + data
			);
			if (data) {
				console.log("! ! ! you got a user! ! ");
				return res.status(200).json(data);
			} else {
				console.log("Uh Oh, something went wrong");
				res.status(500).json({ message: "something went wrong" });
			}
		});
	},
	//Update user
	updateUser(req, res) {
		console.log("! you are updating a single user  ! !  !");
		//_id is a mongoDB key, id is parsed from the url used
		User.findOneAndUpdate(
			//find a document where _id field matches userId
			{ _id: req.params.userId },
			//use the update operator $set to update fields in the req. body
			{ $set: req.body },
			{ runValidators: true, new: true }
		).then((data) => {
			console.log(
				"* * * here is the single user data for your update: " + data
			);
			if (data) {
				console.log("! ! ! you updated a user! ! ");
				return res.status(200).json(data);
			} else {
				console.log("Uh Oh, something went wrong");
				res.status(500).json({ message: "something went wrong" });
			}
		});
	},
};
