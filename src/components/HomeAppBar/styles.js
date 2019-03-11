import { fade } from '@material-ui/core/styles/colorManipulator';

export default (theme) => {
  debugger;
  return (
      {
        root: {
          flexGrow: 1,
        },
        appBarRoot: {
          zIndex: theme.zIndex.drawer + 1
        },
        logo: {
          [theme.breakpoints.down('xs')]:{
            visibility: 'collapse'
          }
        },
        mobileTitleToolbar: {
          visibility: 'collapse',
          [theme.breakpoints.down('xs')]: {
            visibility: 'visible'
          }
        },
        utilButtons: {
          [theme.breakpoints.down('xs')]: {
            visibility: 'collapse'
          }
        },
        grow: {
          flexGrow: 1,
        },
        menuButton: {
          marginLeft: -12,
          marginRight: 20,
          visibility: 'collapse',
          [theme.breakpoints.down('sm')]:{
            visibility: 'visible'
          },
          [theme.breakpoints.down('xs')]:{
            visibility: 'collapse'
          }
        },
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius * 2,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginRight: theme.spacing.unit * 2,
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: '100%',
          }
        },
        searchIcon: {
          width: theme.spacing.unit * 9,
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          color: 'inherit',
          width: '100%',
        },
        inputInput: {
          paddingTop: theme.spacing.unit,
          paddingRight: theme.spacing.unit,
          paddingBottom: theme.spacing.unit,
          paddingLeft: theme.spacing.unit * 10,
          transition: theme.transitions.create('width'),
          width: '100%',
          /*[theme.breakpoints.up('md')]: {
            width: 200,
          },*/
        },
      }
    )
  
  };