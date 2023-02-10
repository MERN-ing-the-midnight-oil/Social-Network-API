const { Schema, model } = require("mongoose");

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

//Schema Settings:
//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

//Reaction is not a model, but rather is used as the reaction field's subdocument schema in the Thought model
const reactionSchema = new mongoose.Schema({
	//for reactionId Use Mongoose's ObjectId data type
	//Default value is set to a new ObjectId
	reactionId: {
		type: Schema.Types.ObjectId, //maybe?
	},
	reactionBody: {
		type: String,
		required: true,
		//280 character maximum
	},
	username: {
		type: String,
		required: true,
	},
	createdAt: {},
});

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
