var Coffee = require('../models/coffee');

module.exports = {
  create,
  index,
  show,
  update,
  deleteCoffee
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

async function show(req, res) {
    const coffee = await Coffee.findById(req.params.id);
    console.log(coffee);
    res.json(coffee);
  }


async function update(req, res) {
    const coffee = await Coffee.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log(coffee);
    res.json(coffee);
  }

async function deleteCoffee(req, res) {
    console.log(req.params.id);
    const coffee = await Coffee.findByIdAndDelete(req.params.id)
    console.log(coffee);
    res.json(coffee);
  }