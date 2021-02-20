import tokenService from './tokenService';

const BASE_URL = '/api/coffees/';

export default {
  index,
  create,
  show,
  updateCoffee,
  deleteCoffee
};

function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function create(coffee) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(coffee)
  };
  return fetch(BASE_URL + 'create', options).then(res => res.json());
}

function show(coffee) {
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(coffee)
    };
    return fetch(`${BASE_URL}${coffee.id}`, options).then(res => res.json());
  }

function updateCoffee(coffee) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(coffee)
    };
    return fetch(`${BASE_URL}${coffee.id}/update`, options).then(res => res.json());
  }

function deleteCoffee(id) {
    const options = {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({id})
      };
      return fetch(`${BASE_URL}${id}`, options).then(res => res.json());
}
