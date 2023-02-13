//look at miniproject student Routes
const router = require("express").Router();
const {
	createThought,
	// getAllThoughts,
	//  updateThought,
	//  deleteThought,
} = require("../../controllers/thoughtController");

//the beginning of all these paths is: /api/thoughts
router.route("/").post(createThought);
