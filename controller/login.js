var passport = require('../config/passport');
var express = require('express');
var router = express.Router();


router.post('/',  passport.authenticate('local', { 
	successRedirect: '/user',
    failureRedirect: '/login',
    failureFlash: true })
);


router.get('/', function(req, res){
	console.log(req.flash());
	res.render('login', { msg : req.flash()});
});

module.exports=router;