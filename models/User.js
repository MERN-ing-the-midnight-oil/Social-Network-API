const { Schema, model } = require("mongoose");

//schema to create a new user model
const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			//make it trimmed
		},
		email: {
			type: String,
			required: true,
			unique: true,
			//Must match a valid email address (look into Mongoose's matching validation)
		},
		//Array of _id values referencing the Thought model
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: "thought",
			},
		],
		//freinds, an array of _id values referencing the User model (self reference)
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: "user", //user refers to a different instance of a user
			},
		],
	},
	{
		// Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
		// Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

const User = model("user", userSchema);

//Schema Settings:
//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
//look at Post.js in 21 Ins_Virtuals

module.exports = User;
