//create a variable called schema that is from the mongoose module and is accessed from mongoose.Schema  , model is a function from the mongoose package used on line 32
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
//Schema to create a thought model
//thoughtText
const thoughtSchema = new Schema({
	thoughtText: {
		type: "string",
		required: true,
		//Must be between 1 and 280 characters
	},
	//createAt
	createdAt: {
		type: Date,
		default: Date.now,
		//Use a getter method to format the timestamp on query
	},
	//username
	//username (The user that created this thought)
	username: {
		type: String,
		required: true,
	},
	//(these are like replies)
	//Array of nested documents create with reactionSchema

	reactions: [reactionSchema],
});

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
