const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

module.exports = {
	createThought(req, res) {
		console.log("! ! you are creating a new thought");
		Thought.create(req.body)
			.then((Thought) => res.json(Thought))
			.catch((err) => res.status(500).json(err));
	},
	getOneThought(req, res) {
		console.log("! ! ! you are getting a single thought... !");
		Thought.findOne({ _id: req.params.thoughtId }).then((data) => {
			console.log(
				"* ** here is the data for getting a single thought: " + data
			);
			if (data) {
				console.log("! ! ! you got a thought! ! ");
				return res.status(200).json(data);
			} else {
				console.log("Uh Oh, something went wrong");
				res.status(500).json({ message: "something went wrong" });
			}
		});
	},
	getAllThoughts(req, res) {
		console.log("! ! ! you are finding all thoughts-! !");
		Thought.find()
			.then((thoughts) => res.json(thoughts))
			.catch((err) => res.status(500).json(err));
	},
	//  updateThought,
	updateThought(req, res) {
		console.log("! you are updating a single thought  ! !  !");
		Thought.findOneAndUpdate(
			//find a document where _id field matches thoughtId (defined in thoughtsRoutes as whatever follows the forward slash in the url)
			{ _id: req.params.thoughtId },
			//use the update operator $set to update fields in the req. body
			{ $set: req.body },
			//runValidators does something cool, probably. Do I need it?? Who knows.
			{ runValidators: true, new: true }
		).then((data) => {
			console.log(
				"* * * here is the single thought data for your update: " + data
			);
			if (data) {
				console.log("! ! ! you updated a thought! ! ");
				return res.status(200).json(data);
			} else {
				console.log("Uh Oh, something went wrong");
				res.status(500).json({ message: "something went wrong" });
			}
		});
	},
	deleteThought(req, res) {
		console.log(
			"! ! ! you are deleting a thought In thoughtController.js... !"
		);
		//_id is a mongoDB key, id is parsed from the url used
		Thought.findOneAndDelete({ _id: req.params.thoughtId }).then((data) => {
			console.log("* * * here is your deleted Thought data: " + data);
			if (data) {
				console.log("! ! ! you have sucessfully deleted a Thought! ! ");
				return res.status(200).json(data);
			} else {
				console.log("Uh Oh, something went wrong deleting your thought");
				res.status(500).json({ message: "something went wrong" });
			}
		});
	},
};
