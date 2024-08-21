import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Tabs,
  Tab,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useFetchData } from '../../hooks/useFetchData';

const AuthForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const { mutate, data, error, isLoading } = useFetchData({
    method: 'POST',
    endpoint: isLogin ? '/users/auth/login' : '/users/auth/register',
    payload: formData,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(null, {
      onSuccess: (response) => {
        localStorage.setItem('token', response.token);
        setTimeout(() => navigate('/dashboard'), 200);
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        backgroundColor: 'background.default',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: '30px',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Tabs
          value={isLogin ? 0 : 1}
          onChange={(e, value) => setIsLogin(value === 0)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullwidth"
          sx={{
            marginBottom: '20px',
          }}
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              required
              InputLabelProps={{
                style: {
                  color: '#264653',
                },
              }}
            />
          )}
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            InputLabelProps={{
              style: {
                color: '#264653',
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            InputLabelProps={{
              style: {
                color: '#264653',
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: '20px',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: '#1D6F65',
              },
            }}
          >
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </form>
        {isLoading && <Typography variant="body2">Loading...</Typography>}
        {error && (
          <Typography variant="body2" color="error">
            {error.message}
          </Typography>
        )}
        {data && (
          <Typography variant="body2">
            {isLogin ? 'Login successful' : 'Registration successful'}
          </Typography>
        )}
        <Box
          sx={{
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          <Typography variant="body2" color="text.primary">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <Button color="secondary" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Register' : 'Login'}
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthForm;
