export default (theme) => {
  return{
    root: {
      flexGrow: 1
    },
    content: {
      flexGrow: 1,
      height: '100%',
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
    }
  };
}