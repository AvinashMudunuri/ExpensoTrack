import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import {
  Home,
  AccountBalance,
  Receipt,
  TrendingUp,
  Settings,
  Logout,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { generateRandomString } from '../../utils';
import { useFetchData } from '../../hooks/useFetchData';

const Sidebar = () => {
  const menuItems = [
    {
      text: 'Home',
      icon: <Home />,
    },
    {
      text: 'Accounts',
      icon: <AccountBalance />,
    },
    {
      text: 'Transactions',
      icon: <Receipt />,
    },
    {
      text: 'Investments',
      icon: <TrendingUp />,
    },
    {
      text: 'Settings',
      icon: <Settings />,
    },
  ];
  const navigate = useNavigate();

  const { mutate } = useFetchData({
    method: 'POST',
    endpoint: '/users/auth/logout',
  });

  const handleLogout = () => {
    mutate(null, {
      onSuccess: (response) => {
        console.log(response);
        localStorage.removeItem('token');
        navigate('/');
      },
    });
  };
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" noWrap>
          ExpensoTrack
        </Typography>
      </Box>
      <List sx={{ backgroundColor: 'primary.main', color: 'white' }}>
        {menuItems.map((menu) => (
          <ListItemButton key={generateRandomString()}>
            <ListItemIcon sx={{ color: 'white' }}>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.text} />
          </ListItemButton>
        ))}
      </List>
      <Box sx={{ flexGrow: 1, backgroundColor: 'primary.main' }} />
      <Box sx={{ padding: '16px', backgroundColor: 'primary.main' }}>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon sx={{ color: 'white' }}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: 'white' }} />
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
