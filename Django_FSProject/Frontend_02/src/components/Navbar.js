import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: '2px solid orange'
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(1, 1),
  display: 'flex',
  alignItems: 'center'
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  color: 'orange',
  fontWeight: 'bold',
  fontSize: '1.8rem',
  cursor: 'pointer',
  marginRight: 'auto',
  paddingLeft: theme.spacing(2)
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'orange',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(255, 165, 0, 0.3)'
  },
}));

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  color: 'orange',
  marginRight: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'rgba(255, 165, 0, 0.1)'
  }
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#1a1a1a',
    border: '1px solid orange'
  }
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: 'orange',
  '&:hover': {
    backgroundColor: 'rgba(255, 165, 0, 0.1)'
  }
}));

export default function Navbar() {
  const [musicAnchor, setMusicAnchor] = useState(null);
  const [chatAnchor, setChatAnchor] = useState(null);

  const handleMusicClick = (event) => setMusicAnchor(event.currentTarget);
  const handleChatClick = (event) => setChatAnchor(event.currentTarget);
  const handleMusicClose = () => setMusicAnchor(null);
  const handleChatClose = () => setChatAnchor(null);

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <MenuIconButton
            size="large"
            edge="start"
            aria-label="menu"
          >
            <MenuIcon />
          </MenuIconButton>

          <LogoTypography variant="h6">
            GrooveHub
          </LogoTypography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            <NavButton component={Link} to="/">
              Home
            </NavButton>
            {/* <NavButton component={Link} to="/musicroom">
              D1
            </NavButton>
            <NavButton component={Link} to="/chatroom">
              D2
            </NavButton> */}
            <NavButton
              onClick={handleMusicClick}
              endIcon={<ArrowDropDownIcon />}
            >
              Music Room
            </NavButton>
            <StyledMenu
              anchorEl={musicAnchor}
              open={Boolean(musicAnchor)}
              onClose={handleMusicClose}
            >
              <StyledMenuItem onClick={handleMusicClose}>Create Room</StyledMenuItem>
              <StyledMenuItem onClick={handleMusicClose}>Join Room</StyledMenuItem>
            </StyledMenu>

            <NavButton
              onClick={handleChatClick}
              endIcon={<ArrowDropDownIcon />}
            >
              Chat Room
            </NavButton>
            <StyledMenu
              anchorEl={chatAnchor}
              open={Boolean(chatAnchor)}
              onClose={handleChatClose}
            >
              <StyledMenuItem onClick={handleChatClose}>Create Room</StyledMenuItem>
              <StyledMenuItem onClick={handleChatClose}>Join Room</StyledMenuItem>
            </StyledMenu>

            <NavButton>Login</NavButton>
          </Box>
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
}