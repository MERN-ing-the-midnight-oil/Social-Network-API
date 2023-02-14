const { Schema, model } = require("mongoose");

// Schema Settings:
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

// Reaction is not a model, but rather is used as the reaction field's subdocument schema in the Thought model
const reactionSchema = new Schema({
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

//no need to actually make a model because this is a submodel
module.exports = reactionSchema;
