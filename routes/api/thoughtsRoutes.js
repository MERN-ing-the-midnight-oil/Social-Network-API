//look at miniproject student Routes
const router = require("express").Router();
const {
	createThought,
	// getThoughts,
	// getOneThought
	//  updateThought,
	//  deleteThought,
} = require("../../controllers/thoughtController");

//the base path of all these paths is: /api/thoughts
router.route("/").post(createThought);
//router.route("/").get(getThoughts);
//router.route("/:thoughtId").delete(deleteThought);
//router.route("/:thoughtId").get(getOneThought);
//router.route("/:thoughtId").put(updateThought);
