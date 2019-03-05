import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

//
import {Drawer, ListItem, ListItemText, ListItemIcon, List, Divider} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


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
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar}/>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(HomeTemplate);