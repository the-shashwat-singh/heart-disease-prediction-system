import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  textDecoration: 'none',
  fontWeight: 700,
  '&:hover': {
    color: alpha(theme.palette.common.white, 0.9),
  },
}));

const HeartIcon = styled(FavoriteIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
  animation: 'pulse 1.5s infinite',
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
}));

const Header = ({ isAuthenticated, user, onLogout }) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    onLogout();
    handleCloseUserMenu();
  };

  // Define navigation items based on authentication state
  const publicNavItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const authNavItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Predict', path: '/predict' },
  ];

  const navItems = isAuthenticated
    ? [...publicNavItems, ...authNavItems]
    : publicNavItems;

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <LogoContainer
            component={RouterLink}
            to="/"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <HeartIcon />
            <Typography
              variant="h6"
              noWrap
              sx={{ mr: 2 }}
            >
              Heart Disease Predictor
            </Typography>
          </LogoContainer>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
              {navItems.map((item) => (
                <MenuItem 
                  key={item.path} 
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={item.path}
                  selected={location.pathname === item.path}
                >
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <LogoContainer
            component={RouterLink}
            to="/"
            sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}
          >
            <HeartIcon />
            <Typography
              variant="h6"
              noWrap
            >
              Heart Predictor
            </Typography>
          </LogoContainer>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <NavButton
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  borderBottom: location.pathname === item.path ? '2px solid white' : 'none',
                }}
              >
                {item.label}
              </NavButton>
            ))}
          </Box>

          {/* User menu or login/register buttons */}
          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user?.name || 'User'} src={user?.avatar}>
                      {user?.name?.charAt(0) || <PersonIcon />}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem 
                    component={RouterLink}
                    to="/dashboard"
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                  <MenuItem 
                    component={RouterLink}
                    to="/profile"
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: 'flex' }}>
                <NavButton
                  component={RouterLink}
                  to="/login"
                  variant="outlined"
                  color="inherit"
                  sx={{ 
                    mr: 1,
                    border: '1px solid white',
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.common.white, 0.1),
                      borderColor: theme.palette.common.white,
                    }
                  }}
                >
                  Login
                </NavButton>
                <NavButton
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  sx={{ 
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.common.white, 0.9),
                    }
                  }}
                >
                  Register
                </NavButton>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header; 