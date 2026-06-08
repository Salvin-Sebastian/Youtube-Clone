import { Stack, Box, IconButton, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import { logo, demoProfilePicture } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: "sticky", background: '#0f0f0f', top: 0, justifyContent: "space-between", zIndex: 100 }}
  >
    {/* Left Section: Menu and Logo */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <IconButton sx={{ color: 'white', display: { xs: 'none', md: 'block' } }}>
        <MenuIcon />
      </IconButton>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
    </Box>

    {/* Center Section: Search and Mic */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <SearchBar />
      <IconButton sx={{ backgroundColor: '#222222', color: 'white', '&:hover': { backgroundColor: '#333333' } }}>
        <MicIcon />
      </IconButton>
    </Box>

    {/* Right Section: Create, Notifications, Profile */}
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", gap: 2 }}>
      <IconButton sx={{ color: 'white' }}>
        <AddBoxOutlinedIcon />
      </IconButton>
      <IconButton sx={{ color: 'white' }}>
        <NotificationsNoneOutlinedIcon />
      </IconButton>
      <Avatar src={demoProfilePicture} sx={{ width: 32, height: 32, ml: 1 }} />
    </Box>
  </Stack>
);

export default Navbar;
