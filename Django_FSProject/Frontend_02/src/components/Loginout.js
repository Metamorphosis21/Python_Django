import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#1a1a1a',
    width: '400px',
    height: '500px',
    maxWidth: '400px',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid orange',
  }
}));

const FormContainer = styled(Box)(({ isSignUp, theme }) => ({
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '100%',
  transition: 'all 0.6s ease-in-out',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transform: isSignUp ? 'translateX(-100%)' : 'translateX(0)',
}));

const SignUpContainer = styled(Box)(({ isSignUp, theme }) => ({
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '100%',
  transition: 'all 0.6s ease-in-out',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transform: isSignUp ? 'translateX(0)' : 'translateX(100%)',
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: 'orange',
    '& fieldset': { borderColor: 'orange' },
    '&:hover fieldset': { borderColor: 'orange' },
    '&.Mui-focused fieldset': { borderColor: 'orange' },
  },
  '& .MuiInputLabel-root': {
    color: 'orange',
    '&.Mui-focused': { color: 'orange' },
  },
  marginBottom: '1rem',
});

const StyledButton = styled(Button)({
  backgroundColor: 'transparent',
  color: 'orange',
  border: '1px solid orange',
  '&:hover': {
    backgroundColor: 'rgba(255, 165, 0, 0.1)',
    border: '1px solid orange',
  },
  margin: '1rem 0',
});

const StyledTypography = styled(Typography)({
  color: 'orange',
  marginBottom: '2rem',
});

export default function LoginOut({ open, onClose, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
    onClose();
    onLoginSuccess();
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up data:', signUpData);
    onClose();
  };

  const handleClose = () => {
    setIsSignUp(false);
    setLoginData({ email: '', password: '' });
    setSignUpData({ username: '', email: '', password: '' });
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <DialogContent sx={{ p: 0, position: 'relative', overflow: 'hidden' }}>
        <FormContainer isSignUp={isSignUp} component="form" onSubmit={handleLoginSubmit}>
          <StyledTypography variant="h4">Login</StyledTypography>
          <StyledTextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleLoginChange}
          />
          <StyledTextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          <StyledButton type="submit" variant="outlined" fullWidth>
            Login
          </StyledButton>
          <StyledButton
            variant="text"
            onClick={() => setIsSignUp(true)}
          >
            Don't have an account? Sign Up
          </StyledButton>
        </FormContainer>

        <SignUpContainer isSignUp={isSignUp} component="form" onSubmit={handleSignUpSubmit}>
          <StyledTypography variant="h4">Sign Up</StyledTypography>
          <StyledTextField
            fullWidth
            label="Username"
            name="username"
            value={signUpData.username}
            onChange={handleSignUpChange}
          />
          <StyledTextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={signUpData.email}
            onChange={handleSignUpChange}
          />
          <StyledTextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={signUpData.password}
            onChange={handleSignUpChange}
          />
          <StyledButton type="submit" variant="outlined" fullWidth>
            Sign Up
          </StyledButton>
          <StyledButton
            variant="text"
            onClick={() => setIsSignUp(false)}
          >
            Already have an account? Login
          </StyledButton>
        </SignUpContainer>
      </DialogContent>
    </StyledDialog>
  );
}