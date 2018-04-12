var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../model/users');


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


passport.use(new LocalStrategy('local-login', function(username, password, done){
		User.selectWhereUsername( {username : username}, function(err, result){
			if(err){
				console.log('Error on select user', err);
				return;
			}

			if(result){
				if(result.password==password)
					return done(result, true);
				else
					return done(null, false, { message : 'Incorrect Username And Password'});
			}
			else{
				console.log('-------------************');
				return done(null, false, { message : 'Incorrect Username'});
			}
		});

	}

));
module.exports=passport;
