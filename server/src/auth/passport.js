const passport    = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
const db = require('../pg')

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, cb) {
        //Assume there is a DB module providing a global UserModel
        return db.one('select id, firstName, lastName, email from users where email = $1 and password = $2', [email, password])
            .then(user => {
                return cb(null, user, {
                    message: 'Logged In Successfully'
                });
            })
            .catch(err => {
                return cb(null, false, {message: 'Incorrect email or password.'});
                //return cb(err);
            });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.SECRET_OR_KEY
    },
    function (jwtPayload, cb) {
        return cb(null, jwtPayload);
        //find the user in db if needed
        /*return UserModel.findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });*/
    }
));
