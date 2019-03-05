const drawerWidth = 240;

export default (theme) => {
  return{
    root: {
      flexGrow: 1,
      display: 'flex'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: {
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      height: '100%',
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
    }
  };
}