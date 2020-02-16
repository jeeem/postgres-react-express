import express from 'express';

const router = express.Router();

router.get('/all/:id', function(req, res, next) {
  let products = [{
    id: 1,
    name: 'James Tucker Product 1',
    description: 'Foo bar baz',
    price: '$19',
    image: 'https://place-hold.it/300x500?text=Has Photo',
    userId: 123
  }, {
    id: 2,
    name: 'James Tucker Product 2',
    description: 'Foo bar baz',
    price: '$20',
    image: null,
    userId: 123
  }]
  res.send(products);
});

router.get('/all', function(req, res, next) {
  let products = [{
    id: 1,
    name: 'James Tucker Product 1',
    description: 'Foo bar baz',
    price: '$19',
    image: 'https://place-hold.it/300x500?text=Has Photo',
    userId: 123
  }, {
    id: 2,
    name: 'James Tucker Product 2',
    description: 'Foo bar baz',
    price: '$20',
    image: null,
    userId: 123
  }, {
    id: 3,
    name: 'James Tucker Product 3',
    description: 'Foo bar baz',
    price: '$21',
    image: null,
    userId: 123
  }, {
    id: 4,
    name: 'James Tucker Product 4',
    description: 'Foo bar baz',
    price: '$21',
    image: 'https://place-hold.it/300x500?text=Has Photo',
    userId: 123
  }]
  res.send(products);
});

router.get('/:id', function(req, res, next) {
  console.log('req.params.id', req.params.id)
  let product = {
    id: 1,
    name: 'James Tucker Product 1',
    description: 'Foo bar baz',
    price: '$19',
    image: 'https://place-hold.it/300x500?text=Has Photo',
    userId: 123
  }
  res.send(product);
});

export default router;
