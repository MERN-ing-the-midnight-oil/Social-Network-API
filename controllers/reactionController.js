//when we post a reactin, don't do reaction.create because reaction is not a model
//instead, update a thought .. specifically the array of reactions to include a new one or delete and update the reactions array in insomnia
const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");
module.exports = {
	//creating a reaction is really updating a thought
	createReaction(req, res) {
		console.log("! ! you are creating a Reaction!  ! !");
		//I want to find a specific thought and update the reactions field
		Thought.reactions
			.findOneAndUpdate(
				//I will try starting by finding the correct thought using the _id parameter put in the URL
				{ _id: req.params.thoughtId },
				//I want to add the new reactionBody to the reactions array in the found Thought. I'll put the reactionBody in the insomnia request.
				{ $addToSet: { reactions: req.body.reactionBody } },
				{ new: true }
			)
			.then((data) => {
				console.log(
					"* * * here is the new reaction data for your update: " + data
				);
				if (data) {
					console.log("! ! ! you created a reaction! ! ");
					return res.status(200).json(data);
				} else {
					console.log("Uh Oh, something went wrong");
					res.status(500).json({ message: "something went wrong" });
				}
			});
	},
};
