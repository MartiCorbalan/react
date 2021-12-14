import React from 'react'
import {AppBar, Typography, Toolbar, makeStyles, IconButton, Button} from '@material-ui/core'

import MenuIcons from '@material-ui/icons/Menu'


const useStyles = makeStyles(theme=> ({
   
    MenuButton:{
        marginRight: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
    },
    title:{
        flexGrow: 1 //ocupa todo el espacio que puede
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        },
      },
}))

const Navbar = (props) => {

    const classes = useStyles()
    return (
        
           <AppBar className={classes.appBar}>
                <Toolbar>
                   <IconButton 
                        color='inherit' 
                        aria-label='menu' 
                        className={classes.MenuButton}
                        onClick={() => props.accionAbrir()}
                    >
                        <MenuIcons/>
                    </IconButton>   
                    <Typography variant='h6' className={classes.title}>
                        corba
                    </Typography>
                    <Button variant="text" color="default" >
                      Login
                    </Button>
                </Toolbar>
           </AppBar>
  
    )
}

export default Navbar
