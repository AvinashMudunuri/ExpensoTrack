import React from 'react';
import PropTypes from 'prop-types';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Sidebar />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        backgroundColor: '#f4f4f4',
      }}
    >
      {children}
    </Box>
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
