const express = require('express');
const router = express.Router();
const coffeesCtrl = require('../../controllers/coffees');

router.get('/', coffeesCtrl.coffees);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, coffeesCtrl.create);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
