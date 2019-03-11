import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import HomeAppBar from '../../components/HomeAppBar';
import HomeDrawer from '../../components/HomeDrawer';

class HomeTemplate extends Component {
  state = {
    menuAnchorEl: undefined,
    openSwipableMenu: false
  };

  handleMenu = (e) => {
    this.setState({menuAnchorEl: e.currentTarget});
  }

  handleClose = (e) => {
    this.setState({menuAnchorEl: undefined});
  }

  handleImageClick = (e) => {
    console.log('handleImageClick not implemented yet! :)');
  }

  toggleSwipableMenu = (e) => {
    this.setState({openSwipableMenu: !this.state.openSwipableMenu});
  }

  render (){
    const { classes } = this.props;
    const { menuAnchorEl, openSwipableMenu} = this.state;

    return (
      <div className={classes.root}>
        <HomeAppBar
          menuAnchorEl={menuAnchorEl}
          handleMenu={this.handleMenu}
          handleClose={this.handleClose}
          openSwipableMenu={this.toggleSwipableMenu}
        />
        <HomeDrawer activeSwipableMenu={openSwipableMenu}
          closeSwipableMenu={this.toggleSwipableMenu}/>
        <main className={classes.content}>
          <div className={classes.toolbar}/>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(HomeTemplate);