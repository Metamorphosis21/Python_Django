import React from 'react';
import { styled } from '@mui/material/styles';

const ChatContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,            
  boxShadow: theme.shadows[8],
  height: '50vh',                      
}));

function ChatRoom() {
  return (
    <ChatContainer>
      <h1>Chat Page</h1>
    </ChatContainer>
  );
}

export default ChatRoom;