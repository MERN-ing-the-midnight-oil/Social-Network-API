//here we are requiring the different methods from reactionController
const router = require("express").Router();

const {
	createReaction,
	//deleteReaction,
} = require("../../controllers/reactionController");

//the base path of all these paths is: /api/thoughts

//a post to this endpoint will create a reaction stored in a single thought's reactions array field
router.route("/:thoughtId/reactions").post(createReaction);
//a delete to this endpoint will pull and remove a reaction by the reaction's reactionId value
//router.route("/:thoughtId/reactionId").delete(deleteReaction);

//advice from LA: deleting a reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

//advice from LA: adding ne reaction
//router.route("/:thoughtId/reactions");
//on INSOMNIA: localhost:3001/api/thoughts/<ENTER-THOUGHTID-HERE>/reactions

module.exports = router;
