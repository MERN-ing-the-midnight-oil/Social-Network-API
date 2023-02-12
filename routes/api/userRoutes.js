//model this after miniproject studentRoutesines 12 15 21  not 18, addAssignment
const router = require("express").Router();
const {
	//these functions were exported from userController.js
	createUser,
	deleteUser,
	// getAllUsers,
	// getOneUser,
} = require("../../controllers/userController");
//insomnia's URL:
//    /api/users/
router.route("/").post(createUser);

//":userID" or just "userID"?
router.route("/:userId").delete(deleteUser);

module.exports = router;
