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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#1a1a1a',
    border: '1px solid orange',
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: 'orange',
    '& fieldset': { borderColor: 'orange' },
    '&:hover fieldset': { borderColor: 'orange' },
  },
  '& .MuiInputLabel-root': { 
    color: 'orange',
    '&.Mui-focused': { color: 'orange' }
  }
}));

const StyledDialogTitle = styled(DialogTitle)({
  color: 'orange'
});

const StyledButton = styled(Button)({
  color: 'orange',
  borderColor: 'orange',
  '&:hover': {
    borderColor: 'orange',
    backgroundColor: 'rgba(255, 165, 0, 0.1)'
  }
});

export default function Navbar() {
  const [musicAnchor, setMusicAnchor] = useState(null);
  const [chatAnchor, setChatAnchor] = useState(null);
  const [createRoomOpen, setCreateRoomOpen] = useState(false);
  const [joinRoomOpen, setJoinRoomOpen] = useState(false);
  const [roomData, setRoomData] = useState({
    roomId: '',
    password: '',
    limit: ''
  });
  const [joinRoomData, setJoinRoomData] = useState({
    roomId: '',
    password: ''
  });
  const [createChatRoomOpen, setCreateChatRoomOpen] = useState(false);
const [joinChatRoomOpen, setJoinChatRoomOpen] = useState(false);
const [chatRoomData, setChatRoomData] = useState({
  roomId: '',
  password: '',
  limit: ''
});
const [joinChatRoomData, setJoinChatRoomData] = useState({
  roomId: '',
  password: ''
});

  const handleMusicClick = (event) => setMusicAnchor(event.currentTarget);
  const handleChatClick = (event) => setChatAnchor(event.currentTarget);
  const handleMusicClose = () => setMusicAnchor(null);
  const handleChatClose = () => setChatAnchor(null);

  const handleCreateRoomOpen = () => {
    setCreateRoomOpen(true);
    handleMusicClose();
  };

  const handleCreateRoomClose = () => {
    setCreateRoomOpen(false);
    setRoomData({ roomId: '', password: '', limit: '' });
  };

  const handleJoinRoomOpen = () => {
    setJoinRoomOpen(true);
    handleMusicClose();
  };

  const handleJoinRoomClose = () => {
    setJoinRoomOpen(false);
    setJoinRoomData({ roomId: '', password: '' });
  };

  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(roomData.roomId);
  };

  const handleCreateRoom = () => {
    // Add your room creation logic here
    console.log('Creating room:', roomData);
    handleCreateRoomClose();
  };

  const handleJoinRoom = () => {
    // Add your room joining logic here
    console.log('Joining room:', joinRoomData);
    handleJoinRoomClose();
  };

  const handleCreateChatRoomOpen = () => {
    setCreateChatRoomOpen(true);
    handleChatClose();
  };
  
  const handleCreateChatRoomClose = () => {
    setCreateChatRoomOpen(false);
    setChatRoomData({ roomId: '', password: '', limit: '' });
  };
  
  const handleJoinChatRoomOpen = () => {
    setJoinChatRoomOpen(true);
    handleChatClose();
  };
  
  const handleJoinChatRoomClose = () => {
    setJoinChatRoomOpen(false);
    setJoinChatRoomData({ roomId: '', password: '' });
  };
  
  const handleCopyChatRoomId = () => {
    navigator.clipboard.writeText(chatRoomData.roomId);
  };
  
  const handleCreateChatRoom = () => {
    // Add your chat room creation logic here
    console.log('Creating chat room:', chatRoomData);
    handleCreateChatRoomClose();
  };
  
  const handleJoinChatRoom = () => {
    // Add your chat room joining logic here
    console.log('Joining chat room:', joinChatRoomData);
    handleJoinChatRoomClose();
  };
  
  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <MenuIconButton size="large" edge="start" aria-label="menu">
            <MenuIcon />
          </MenuIconButton>
  
          <LogoTypography variant="h6">GrooveHub</LogoTypography>
  
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            <NavButton component={Link} to="/">Home</NavButton>
            <NavButton onClick={handleMusicClick} endIcon={<ArrowDropDownIcon />}>
              Music Room
            </NavButton>
            <StyledMenu
              anchorEl={musicAnchor}
              open={Boolean(musicAnchor)}
              onClose={handleMusicClose}
            >
              <StyledMenuItem onClick={handleCreateRoomOpen}>Create Room</StyledMenuItem>
              <StyledMenuItem onClick={handleJoinRoomOpen}>Join Room</StyledMenuItem>
            </StyledMenu>
  
            <NavButton onClick={handleChatClick} endIcon={<ArrowDropDownIcon />}>
              Chat Room
            </NavButton>
            <StyledMenu
              anchorEl={chatAnchor}
              open={Boolean(chatAnchor)}
              onClose={handleChatClose}
            >
              <StyledMenuItem onClick={handleCreateChatRoomOpen}>Create Room</StyledMenuItem>
              <StyledMenuItem onClick={handleJoinChatRoomOpen}>Join Room</StyledMenuItem>
            </StyledMenu>
  
            <NavButton>Login</NavButton>
          </Box>
        </StyledToolbar>
      </StyledAppBar>
  
      {/* Create Room Modal */}
      <StyledDialog open={createRoomOpen} onClose={handleCreateRoomClose}>
        <StyledDialogTitle>Create Music Room</StyledDialogTitle>
        <DialogContent>
          <StyledTextField
            margin="dense"
            label="Room ID"
            fullWidth
            value={roomData.roomId}
            onChange={(e) => setRoomData({ ...roomData, roomId: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleCopyRoomId} sx={{ color: 'orange' }}>
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={roomData.password}
            onChange={(e) => setRoomData({ ...roomData, password: e.target.value })}
          />
          <StyledTextField
            margin="dense"
            label="Member Limit"
            type="number"
            fullWidth
            value={roomData.limit}
            onChange={(e) => setRoomData({ ...roomData, limit: e.target.value })}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <StyledButton variant="outlined" onClick={handleCreateRoomClose}>
            Cancel
          </StyledButton>
          <StyledButton variant="outlined" onClick={handleCreateRoom}>
            Create
          </StyledButton>
        </DialogActions>
      </StyledDialog>
  
      {/* Join Room Modal */}
      <StyledDialog open={joinRoomOpen} onClose={handleJoinRoomClose}>
        <StyledDialogTitle>Join Music Room</StyledDialogTitle>
        <DialogContent>
          <StyledTextField
            margin="dense"
            label="Room ID"
            fullWidth
            value={joinRoomData.roomId}
            onChange={(e) => setJoinRoomData({ ...joinRoomData, roomId: e.target.value })}
          />
          <StyledTextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={joinRoomData.password}
            onChange={(e) => setJoinRoomData({ ...joinRoomData, password: e.target.value })}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <StyledButton variant="outlined" onClick={handleJoinRoomClose}>
            Cancel
          </StyledButton>
          <StyledButton variant="outlined" onClick={handleJoinRoom}>
            Join
          </StyledButton>
        </DialogActions>
      </StyledDialog>

      {/* Create Chat Room Modal */}
      <StyledDialog open={createChatRoomOpen} onClose={handleCreateChatRoomClose}>
        <StyledDialogTitle>Create Chat Room</StyledDialogTitle>
        <DialogContent>
          <StyledTextField
            margin="dense"
            label="Room ID"
            fullWidth
            value={chatRoomData.roomId}
            onChange={(e) => setChatRoomData({ ...chatRoomData, roomId: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleCopyChatRoomId} sx={{ color: 'orange' }}>
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={chatRoomData.password}
            onChange={(e) => setChatRoomData({ ...chatRoomData, password: e.target.value })}
          />
          <StyledTextField
            margin="dense"
            label="Member Limit"
            type="number"
            fullWidth
            value={chatRoomData.limit}
            onChange={(e) => setChatRoomData({ ...chatRoomData, limit: e.target.value })}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <StyledButton variant="outlined" onClick={handleCreateChatRoomClose}>
            Cancel
          </StyledButton>
          <StyledButton variant="outlined" onClick={handleCreateChatRoom}>
            Create
          </StyledButton>
        </DialogActions>
      </StyledDialog>

      {/* Join Chat Room Modal */}
      <StyledDialog open={joinChatRoomOpen} onClose={handleJoinChatRoomClose}>
        <StyledDialogTitle>Join Chat Room</StyledDialogTitle>
        <DialogContent>
          <StyledTextField
            margin="dense"
            label="Room ID"
            fullWidth
            value={joinChatRoomData.roomId}
            onChange={(e) => setJoinChatRoomData({ ...joinChatRoomData, roomId: e.target.value })}
          />
          <StyledTextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={joinChatRoomData.password}
            onChange={(e) => setJoinChatRoomData({ ...joinChatRoomData, password: e.target.value })}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <StyledButton variant="outlined" onClick={handleJoinChatRoomClose}>
            Cancel
          </StyledButton>
          <StyledButton variant="outlined" onClick={handleJoinChatRoom}>
            Join
          </StyledButton>
        </DialogActions>
      </StyledDialog>
    </>
  );
}