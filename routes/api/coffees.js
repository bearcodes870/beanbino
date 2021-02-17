const express = require('express');
const router = express.Router();
const coffeesCtrl = require('../../controllers/coffees');

router.get('/', coffeesCtrl.index);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/create', coffeesCtrl.create);
// show page /:id
/* 
* implement show ctrl action
* will find a coffee based on id
* res.json the coffee that is found
* add a util for react to reach this endpoint
**/
router.get('/:id', coffeesCtrl.show);
router.put('/:id/update', coffeesCtrl.update);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;

