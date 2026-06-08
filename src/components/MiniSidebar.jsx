import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', icon: <HomeIcon /> },
  { name: 'Shorts', icon: <SlowMotionVideoIcon /> },
  { name: 'Subscriptions', icon: <SubscriptionsOutlinedIcon /> },
  { name: 'You', icon: <VideoLibraryOutlinedIcon /> },
];

const MiniSidebar = () => {
  return (
    <Stack
      sx={{
        width: '72px',
        backgroundColor: '#0f0f0f',
        position: 'sticky',
        top: '60px',
        height: 'calc(100vh - 60px)',
        alignItems: 'center',
        pt: 1,
        display: { xs: 'none', md: 'flex' }
      }}
    >
      {navItems.map((item) => (
        <Link to="/" key={item.name} style={{ textDecoration: 'none', color: '#fff' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '74px',
              width: '64px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#272727'
              },
              mb: 0.5
            }}
          >
            {item.icon}
            <Typography sx={{ fontSize: '10px', mt: '6px', fontWeight: 400 }}>
              {item.name}
            </Typography>
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

export default MiniSidebar;
