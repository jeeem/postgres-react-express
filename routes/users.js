import express from 'express';
import config from '../config.js';

const router = express.Router();

router.get('/', function(req, res, next) {
  let users = [
    {
      id: 123,
      name: 'James Tucker',
      email: 'jimmytucker0@gmail.com',
      products: []
    }
  ]
  res.send(users);
});

export default router;
