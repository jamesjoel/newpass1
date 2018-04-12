var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');


app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret : 'TSS'}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
	res.locals.message = req.flash();
	console.log(res.locals);
	next();
});

app.use(require('./controller/router'));
// Default Controller Come Here
app.listen(3000, function(){
	console.log('Running');
})