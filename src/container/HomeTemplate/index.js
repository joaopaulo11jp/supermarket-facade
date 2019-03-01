import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import HomeAppBar from '../../components/HomeAppBar';

class HomeTemplate extends Component {
  state = {
    menuAnchorEl: undefined
  };

  handleMenu = (e) => {
    this.setState({menuAnchorEl: e.currentTarget});
  }

  handleClose = (e) => {
    this.setState({menuAnchorEl: undefined});
  }

  render (){
    const { classes } = this.props;
    const { menuAnchorEl } = this.state;

    return (
      <div className={classes.root}>
        <HomeAppBar
          menuAnchorEl={menuAnchorEl}
          handleMenu={this.handleMenu}
          handleClose={this.handleClose}
        />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(HomeTemplate);