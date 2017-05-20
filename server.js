//node modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/html-routes.js');
var apiRoutes = require('./app/routing/api-routes.js');
//express setup
var app = express();
var PORT = process.env.PORT || 3000;
//sets up express to serve static files
app.use(express.static(path.join(__dirname, 'app/public')));
//set up express to parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//call the apiRoutes and htmlRoutes functions and pass in app
apiRoutes(app);
htmlRoutes(app);

//start
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
