import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import HomeAppBar from '../../components/HomeAppBar';
import HomeDrawer from '../../components/HomeDrawer';

import HomeCarousel from '../../components/HomeCarousel';

const colors = ["7732bb", "047cc0", "00884b", "e3bc13", "db7c00", "aa231f"];

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

  handleImageClick = (e) => {
    console.lof('handleImageClick not implemented yet! :)');
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
        <HomeDrawer/>
        <main className={classes.content}>
          <div className={classes.toolbar}/>
          <HomeCarousel/>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(HomeTemplate);