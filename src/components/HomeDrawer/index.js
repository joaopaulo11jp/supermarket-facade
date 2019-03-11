import React, { Component } from 'react';

import {Drawer, ListItem, ListItemText, ListItemIcon, List, Divider, withStyles, SwipeableDrawer} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from 'prop-types';

import styles from './styles';


class HomeDrawer extends Component {

  closeSwipableMenu = (e) => {
    if(this.props.closeSwipableMenu)
      this.props.closeSwipableMenu();
  }

  listContent = (e) => {
    return (
      <div>
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
      </div>
    );
  }

  render() {
    const { classes, activeSwipableMenu } = this.props;
    return (
      <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        {this.listContent()}
      </Drawer>

      <SwipeableDrawer
        open={activeSwipableMenu}
        onClose={this.closeSwipableMenu}>
        {this.listContent()}
      </SwipeableDrawer>
      </div>
    );
  }
}

HomeDrawer.propTypes = {
  activeSwipableMenu: PropTypes.bool,
  closeSwipableMenu: PropTypes.func
}

export default withStyles(styles)(HomeDrawer);