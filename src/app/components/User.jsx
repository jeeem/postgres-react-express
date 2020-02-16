import React, { Component } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core//Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Username from './Username.jsx'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
      /*
      {
        email: '',
        id: '',
        name: '',
        products: []
      }
      */
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    let users = []
    let productRequestsArray = []
    return fetch("/users/")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log('response from /users', json)
        users = json
        console.log(users)
        return fetch("/product/all/")
          .then(response => {
            return response.json();
          })
      })
      .then(json => {
        console.log(users)
        console.log('json', json)
        return json.forEach(product => {
          users.forEach((user, index) => {
            if (user.id === product.userId) {
              users[index].products.push(product)
            }
          })
        })
      })
      .then(() => {
        console.log(users)
        return this.setState({
          users
        })
      });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    console.log('this.state', this.state)
    if (!this.state.users.length) null
    return this.state.users.map(user => (
      <Container style={{alignItems: 'stretch', display: 'flex', flexWrap:'wrap'}}>
        <Username userName={user.name} email={user.email}/>
        {
          user.products.map(product => (
            <Card style={{alignItems: 'flex-end', display: 'flex', minWidth: '400px', width: '50%'}}>
              <CardActionArea>
                <CardMedia
                  image={product.image ? product.image : 'https://place-hold.it/300x500?text=Missing Photo'}
                  style={{height: '140px'}}
                  title="Contemplative Reptile"
                />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {product.description}
                </Typography>
                <Typography color="textSecondary">
                  {product.price}
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Container>
    ))
  }
}

export default User;
