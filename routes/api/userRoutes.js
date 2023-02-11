//model this after miniproject studentRoutesines 12 15 21  not 18, addAssignment
const router = require("express").Router();
const {
	createUser, //this function was exported from userController.js
	//  deleteUser,
	// getAllUsers,
	// getOneUser,
} = require("../../controllers/userController");
//insomnia's URL: /api/users
router.route("/users").post(createUser);

module.exports = router;
