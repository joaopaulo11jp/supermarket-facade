const drawerWidth = 240;

export default (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]:{
      visibility: 'hidden'
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: {
    ...theme.mixins.toolbar
  }
});