const router = require("express").Router();
//const thoughtsRoutes = require("./thoughtsRoutes");
const usersRoutes = require("./userRoutes");

//router.use("/thoughts", thoughtsRoutes);

//I think this means the actual URL used by the fron end will just be 3001/api/users
router.use("/users", usersRoutes);

module.exports = router;
