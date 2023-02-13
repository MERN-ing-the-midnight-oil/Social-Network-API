//here we are requireing the different methods from thoughtController, then assigning them to routes
const router = require("express").Router();
const {
	createThought,
	getOneThought,
	getAllThoughts,
	updateThought,
	deleteThought,
} = require("../../controllers/thoughtController");

//the base path of all these paths is: /api/thoughts
router.route("/").post(createThought);
router.route("/").get(getAllThoughts);
router.route("/:thoughtId").get(getOneThought);
router.route("/:thoughtId").put(updateThought);
router.route("/:thoughtId").delete(deleteThought);
module.exports = router;
