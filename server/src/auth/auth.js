const express = require('express');
const router  = express.Router();

const jwt      = require('jsonwebtoken');
const passport = require('passport');
const db = require('../pg')

router.get('/me', passport.authenticate('jwt',{ session: false}), function(req, res, next){
  db.one('select id, firstName, lastName, email from users where id = $1', req.user.id)
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      user: data,
      message: 'Retrieved ME'
    });
  })
  .catch(function(err){
    return next(err);
  });

})

/* POST login. */
router.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }

        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            const token = jwt.sign({id: user.id}, process.env.SECRET_OR_KEY);

            return res.json({user, token});
        });
    })
    (req, res);

});

module.exports = router;
