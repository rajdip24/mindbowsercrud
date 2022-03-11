import { AppBar, Toolbar, Typography,makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';


const useStyle = makeStyles({
    header:{
        background: '#111111'
    },
    tabs:{
        color:'#ffffff',
        textDecoration:'none',
        marginRight:20,
        fontSize:20
    }
})


function Navbar() {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <NavLink to="/all" className={classes.tabs}  >All Users</NavLink>
                <NavLink to="/add" className={classes.tabs}  >Add User</NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
