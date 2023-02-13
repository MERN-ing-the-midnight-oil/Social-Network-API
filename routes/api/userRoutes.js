//model this after miniproject studentRoutesines 12 15 21  not 18, addAssignment
const router = require("express").Router();
const {
	//these functions were exported from userController.js
	createUser,
	deleteUser,
	getSingleUser,
	updateUser,
	getUsers,
} = require("../../controllers/userController");

//the base path for these paths is:  /api/users
router.route("/").post(createUser);
router.route("/").get(getUsers);
router.route("/:userId").delete(deleteUser);
router.route("/:userId").get(getSingleUser);
router.route("/:userId").put(updateUser);
module.exports = router;
