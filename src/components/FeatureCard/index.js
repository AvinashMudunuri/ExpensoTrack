import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FeatureCard = ({ title, description, bgColor, icon }) => {
  const CardContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette[bgColor]
      ? theme.palette[bgColor].main
      : bgColor,
    padding: theme.spacing(4),
    borderRadius: '8px',
    textAlign: 'center',
    color: '#FFF',
  }));

  return (
    <CardContainer elevation={3}>
      {icon && <Box sx={{ marginBottom: '16px' }}>{icon}</Box>}
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContainer>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default FeatureCard;
