//here we are requireing the different methods from thoughtController, then assigning them to routes
const router = require("express").Router();
const {
	createThought,
	getOneThought,
	getAllThoughts,
	updateThought,
	deleteThought,
} = require("../../controllers/thoughtController");

const {
	createReaction,
	//deleteReaction,
} = require("../../controllers/reactionController");

//the base URL path of all these URL paths is: /api/thoughts
router.route("/").post(createThought);
router.route("/").get(getAllThoughts);
router.route("/:thoughtId").get(getOneThought);
router.route("/:thoughtId").put(updateThought);
router.route("/:thoughtId").delete(deleteThought);

//adding createREaction and deleteREaction
router.route("/:thoughtId/reactions").post(createReaction);
//router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)
module.exports = router;
