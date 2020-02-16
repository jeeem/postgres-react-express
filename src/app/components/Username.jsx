import React, { Component } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Username extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userName, email } = this.props
    return (
      <Card style={{width: '100%'}}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {userName}
          </Typography>
          <Typography color="textSecondary">
            { email }
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Username;
