import React from 'react';
import { styled } from '@mui/material/styles';

const HomeContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,            
  boxShadow: theme.shadows[8],
  height: '50vh',                      
}));

function Home() {
  return (
    <HomeContainer>
      <h1>Home Page</h1>
    </HomeContainer>
  );
}

export default Home;