var database = [
	{
		username: "dobrica",
		password: "petric"
	},
	{
		username: "Sally",
		password: "123"
	},{
		username: "ingrid",
		password: "777"
	}
];

var newsfeed  = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},
	{	
		username: "Sally",
		timeline: "Javascript is sooooo coool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeeetyy cool!"
	}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if (database[i].username === username && database[i].password === password) {
			return true;
		} 
	}
	return false;
}

function signIn(username, password) {

	if (isUserValid(username, password)) {
		console.log(newsfeed);
	}else {
		console.log("Sorry, wrong username and password");
	}
};

var usernamePrompt = prompt("What\'s your username?")
var passwordPrompt = prompt("What\'s your password?")

signIn(usernamePrompt, passwordPrompt);