const router = require("express").Router();

const apiRoutes = require("./api"); //go to this filepath to look for the routes to use

router.use("/api", apiRoutes); //go to the above filepath when the url is /api

router.use((req, res) => {
	return res.send("! ! ! routes index.js: Wrong route!");
});

module.exports = router;
