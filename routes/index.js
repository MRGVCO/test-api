var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'alive'});
});

const userRoutes = require('./user');

router.use('/users', userRoutes);


module.exports = router;
