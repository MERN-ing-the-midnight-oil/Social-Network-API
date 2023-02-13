const router = require("express").Router();

const thoughtsRoutes = require("./thoughtsRoutes"); //filepath
router.use("/thoughts", thoughtsRoutes); //URL

const usersRoutes = require("./userRoutes"); //filepath
router.use("/users", usersRoutes); //URL

module.exports = router;
