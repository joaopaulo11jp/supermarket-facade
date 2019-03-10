export default (theme) => ({
    root:{
      flexGrow: 1,
      backgroundColor: 'transparent'
    },
    subtractButton: {
      //paddingLeft:0
    },
    quantity: {
      textAlign: 'center',
      minWidth:  (theme.spacing.unit * 2) + 2
    },
    plusButton: {

    },
    operatorButtonIcon: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      "&:hover":{
        backgroundColor: "transparent"
      },
      "&:active":{
        color: theme.palette.primary.light
      }
    },
    putOnBasketButton: {
      borderRadius: 5,
      backgroundColor: theme.palette.primary.main
    },
    putOnBasketIcon: {
      color: theme.palette.common.white,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      "&:hover":{
        backgroundColor: "transparent"
      },
      "&:active":{
        color: theme.palette.primary.light
      }
    },
});