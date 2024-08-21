import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import {
  AttachMoney,
  TrendingUp,
  BarChart,
  AccountBalance,
  Security,
  Category,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import FeatureCard from '../../components/FeatureCard';
import { generateRandomString } from '../../utils';

const RootContainer = styled(Box)(() => ({
  backgroundColor: 'primary.main',
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

const LandingPage = () => {
  const features = [
    {
      title: 'Track Expenses',
      description: 'Easily track all your expenses in one place.',
      color: 'secondary',
      icon: AttachMoney,
    },
    {
      title: 'Manage Investments',
      description: 'Keep an eye on your investments and maximize your returns.',
      color: 'warning',
      icon: TrendingUp,
    },
    {
      title: 'Automated Reports',
      description: 'Generate detailed reports on your financial activities',
      color: 'info',
      icon: BarChart,
    },
    {
      title: 'Loan Management',
      description: 'Keep track of your loans and payments easily.',
      color: 'error',
      icon: AccountBalance,
    },
    {
      title: 'Secure Transactions',
      description:
        'All your financial data is protected with top-notch security',
      color: 'secondary',
      icon: Security,
    },
    {
      title: 'Customizable Categories',
      description:
        'Organize your finances your way with customizable categories.',
      color: 'warning',
      icon: Category,
    },
  ];
  return (
    <RootContainer>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            padding: '40px 0',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" gutterBottom>
            Welcome to ExpensoTrack
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            The utlimate tool to manage your finances effortlessly.
          </Typography>
          {/* <Button variant='contained' color='secondary' sx={{ margin: '10px' }}>Register</Button>
          <Button variant='contained' color='secondary' sx={{ margin: '10px' }}>Login</Button> */}
        </Box>
        {/* features Section */}
        <Box sx={{ padding: '60px 0' }}>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', marginBottom: '40px' }}
          >
            Features
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={4}>
                <FeatureCard
                  key={generateRandomString()}
                  title={feature.title}
                  description={feature.description}
                  bgColor={feature.color}
                  icon={<feature.icon />}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </RootContainer>
  );
};

export default LandingPage;
