import React from 'react';
import { styled } from '@mui/material/styles';

const MusicContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,            
  boxShadow: theme.shadows[8],
  height: '50vh',                      
}));

function Musicroom() {
  return (
    <MusicContainer>
      <h1>Music Page</h1>
    </MusicContainer>
  );
}

export default Musicroom;