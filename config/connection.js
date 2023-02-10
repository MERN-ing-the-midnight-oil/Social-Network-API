//establishing my connection to the backend, naming the db "socialNetworkDB"
//this will just run locally with a walk-through video
const { connect, connection } = require("mongoose");

connect("mongodb://localhost/socialNetworkDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

//making my connection available to routes
module.exports = connection;
