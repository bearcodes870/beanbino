const express = require('express');
const router = express.Router();
const coffeesCtrl = require('../../controllers/coffees');

router.get('/', coffeesCtrl.index);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/create', checkAuth, coffeesCtrl.create);
router.get('/:id', checkAuth, coffeesCtrl.show);
router.put('/:id/update', checkAuth, coffeesCtrl.update);
router.delete('/:id', coffeesCtrl.deleteCoffee);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;

