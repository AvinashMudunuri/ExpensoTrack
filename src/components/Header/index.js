import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ title }) => (
  <AppBar
    position="static"
    sx={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}
  >
    <Toolbar>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
