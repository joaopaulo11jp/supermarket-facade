import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Typography, InputBase, Menu, MenuItem} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from './styles';

import logo from '../../assets/Bravo_Supermarket.png';

class Home extends Component {
  state = {
    anchorEl: undefined
  };

  handleMenu = (e) => {
    this.setState({anchorEl: e.currentTarget});
  }

  handleClose = (e) => {
    this.setState({anchorEl: undefined});
  }

  render (){
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Bravo supermercado!" width={160.6} heigth={10.517}/>
            {/*<Typography variant="h6" color="inherit" className={classes.grow}>
              Supermercado
            </Typography>*/}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase placeholder="Custom search..." classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}/>
            </div>
            <IconButton 
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                color="inherit"
                onClick={this.handleMenu}>
              <AccountCircle/>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={open}
              onClose={this.handleClose}
              >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
            {/*<Button color="inherit">Login</Button>*/}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);