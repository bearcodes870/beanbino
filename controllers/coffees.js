var Coffee = require('../models/coffee');

module.exports = {
  create,
  index,
  show,
  update
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
    const coffees = await Coffee.find({});
    // respond with json
    res.json(coffees);
}

function show(req, res) {
    const coffee = Coffee.findById(req.params.id)
    .then(coffee => {console.log(coffee)})
    res.json(coffee);
  }


function update(req, res) {
    const coffee = Coffee.findById(req.params.id)
    .then(coffee => {console.log(coffee)})
    res.json(coffee)
  }

// coffee._ = name
// req.body 