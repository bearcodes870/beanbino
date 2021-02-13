var Coffee = require('../models/coffee');

module.exports = {
  create,
  coffees
};

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    await Coffee.create(req.body);
    coffees(req, res);
  } catch (err) {
    res.json({err});
  }
}

async function coffees(req, res) {
    console.log(req.user)
  const coffees = await Coffee.find({})
    .limit(req.query.limit || 20);
  res.json(coffees);
}





