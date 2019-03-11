import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, InputBase, Menu, MenuItem, Badge, Grid} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styles from './styles';

import logo from '../../assets/Bravo_Supermarket.png';
// import { Container } from './styles';

class HomeAppBar extends Component {

  handleMenu = (e) => {
    if(this.props.handleMenu){
      this.props.handleMenu(e);
    }
  }

  handleClose = (e) => {
    if(this.props.handleClose){
      this.props.handleClose(e);
    }
  }

  handleBasketClick = (e) => {
    console.log('Not implemented yet! :)');
  }

  openSwipableMenu = (e) => {
    if(this.props.openSwipableMenu)
      this.props.openSwipableMenu();
  }

  render() {
    const { menuAnchorEl, classes } = this.props;
    const open = Boolean(menuAnchorEl);

    return (
      <AppBar position="fixed" className={classes.appBarRoot}>
          <Toolbar className={classes.mobileTitleToolbar}>
            <Grid container
                  direction={'row'}
                  justify={'space-between'}>
              <IconButton color="inherit" aria-label="Menu" onClick={this.openSwipableMenu}>
                <MenuIcon />
              </IconButton>
              <img src={logo} alt="Bravo supermercado!" width={100.6} heigth={3.517}/>
              <div>
                <IconButton color="inherit" onClick={this.handleBasketClick}>
                  <Badge badgeContent={99} color="secondary">
                    <ShoppingCartIcon/>
                  </Badge>
                </IconButton>
              </div>
            </Grid>
          </Toolbar>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.openSwipableMenu}>
              <MenuIcon />
            </IconButton>
            <img className={classes.logo} src={logo} alt="Bravo supermercado!" width={140.6} heigth={8.517}/>
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
            <IconButton color="inherit" className={classes.utilButtons}>
              <LocationOnIcon/>
            </IconButton>
            <IconButton 
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                color="inherit"
                onClick={this.handleMenu}
                className={classes.utilButtons}>
              <AccountCircle/>
            </IconButton>
            <IconButton color="inherit" onClick={this.handleBasketClick}
              className={classes.utilButtons}>
              <Badge badgeContent={99} color="secondary">
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
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
    );
  }
}

HomeAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  menuAnchorEl: PropTypes.object,
  handleMenu: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  openSwipableMenu: PropTypes.func,
};

export default withStyles(styles)(HomeAppBar);
