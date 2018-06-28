const db = require('../../pg')

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function getAllTests(req,res,next) {
  db.any('select * from tests')
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved ALL tests'
    });
  })
  .catch(function(err){
    return next(err);
  })

}

function getSingleTest(req, res, next) {
  var routeId = parseInt(req.params.id);
  db.one('select * from tests where id = $1', routeId)
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved ONE test'
    });
  })
  .then(handleEntityNotFound(res))
  .catch(function(err){
    return next(err);
  });

}


module.exports = {
  getAllTests: getAllTests,
  getSingleTest: getSingleTest
}
