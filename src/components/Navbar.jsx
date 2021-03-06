import React from "react"
import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";
import {styles} from "./Navbar.styles.js";
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import logoPic from '../images/logo2.png'
import Box from '@material-ui/core/Box';
  const Navbar = (props) => {

  const {classes} = props

  return (
    <div className={classes.root}>
      <AppBar className={classes.color} position="static">
        <Toolbar >
          <Box display='flex' flexGrow={1}>
            <NavLink 
            to="/" 
            >
            <img src={logoPic} alt="logo" className={classes.logo} />
            
          </NavLink>
          </Box>
          <NavLink 
              to="sell-items" 
              className={classes.inactive}
              activeClassName={classes.active}
          >
              Sell Memoribilia
          </NavLink>
          <NavLink 
              to="rankings" 
              className={classes.inactive}
              activeClassName={classes.active}
          >
              Rankings
          </NavLink>
          <NavLink 
              to="browse-items" 
              className={classes.inactive}
              activeClassName={classes.active}
          >
              Browse
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
    
    

export default withStyles(styles)(Navbar);