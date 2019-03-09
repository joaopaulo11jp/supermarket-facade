export default (theme) => ({
    root:{
      flexGrow: 1,
      backgroundColor: 'transparent'
    },
    subtractButton: {

    },
    quantity: {
      textAlign: 'center'
    },
    plusButton: {

    },
    operatorButtonIcon: {
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
      "&:hover":{
        backgroundColor: "transparent"
      },
      "&:active":{
        color: theme.palette.primary.light
      }
    },
});