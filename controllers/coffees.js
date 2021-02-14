var Coffee = require('../models/coffee');

module.exports = {
  create,
  index
};

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    const coffee = await Coffee.create(req.body);
    res.json({coffee})
  } catch (err) {
    res.json({err});
  }
}

async function index(req, res) {
    // todo: use function to look up all coffees in database
    // respond with json
}

// coffee.find all
// when added, add to the list