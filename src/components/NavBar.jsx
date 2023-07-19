import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {NavLink} from 'react-router-dom'
import { Avatar } from '@mui/material';

const pages = [
    {path: '/', name:'Home'},
    {path: 'about', name:'About'},
    {path: 'images', name:'Images'},
    {path: 'products', name: 'Products'},
    {path: 'contact', name:'Contact'},
    {path: 'questions', name:'Questions'},
];

export const NavBar=({isLoggedIn, setIsLoggedIn, loggedUser})=>{
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((obj) => (
                <NavLink key={obj.name} to={obj.path} className={({isActive})=>(isActive ? 'active' : '')}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{obj.name}</Typography>
                </MenuItem>
                </NavLink>
              ))}

             {!isLoggedIn && <NavLink to='/login' className={({isActive})=>(isActive ? 'active' : '')}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Login</Typography>
                 
                </MenuItem>
              </NavLink>}

              {isLoggedIn && <NavLink to='/' className={({isActive})=>(isActive ? 'active' : '')}>
                <MenuItem onClick={()=>setIsLoggedIn(false)}>
                  <Typography textAlign="center">Logout</Typography>
                  <Avatar>{loggedUser.slice(0,1)}</Avatar>
                </MenuItem>
              </NavLink>}

            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((obj) => (
             <NavLink key={obj.name} to={obj.path} className={({isActive})=>isActive ? 'active' : ''}>
             <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {obj.name}
              </Button>
              </NavLink>
              
            ))}
          </Box>

          {!isLoggedIn && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifySelf: 'flex-end'} }}>
            <NavLink  to='/login' className={({isActive})=>isActive ? 'active' : ''}>
             <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                Login
              </Button>
              </NavLink>
          </Box>}

          {isLoggedIn && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifySelf: 'flex-end'} }}>
            <NavLink  to='/login' className={({isActive})=>isActive ? 'active' : ''}>
             <Button
                onClick={()=>setIsLoggedIn(false)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                Logout
              </Button>
              <Avatar>{loggedUser.slice(0,1)}</Avatar>
              </NavLink>
          </Box>}
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
