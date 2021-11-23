import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import logo from '../../../Image_Icon/logo.png'


const Navigation = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        <img style={{ height: '40px'}} src={logo}/>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Jerins Parlour
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/'>
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/portfolio'>
                        <Button color="inherit">Our Portfolio</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/ourTeam'>
                        <Button color="inherit">Our Team</Button>
                    </NavLink>
                    <Button style={{color:"inherit", backgroundColor: 'hotpink', padding: '8px 40px'}}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;