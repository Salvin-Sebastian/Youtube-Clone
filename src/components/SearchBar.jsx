import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #303030',
        pl: 2,
        boxShadow: 'none',
        background: '#121212',
        display: 'flex',
        alignItems: 'center',
        width: { xs: '200px', sm: '350px', md: '450px', lg: '550px' },
        height: '40px',
        overflow: 'hidden' // To ensure the button background doesn't overflow rounded corners
      }}
    >
      <input
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ border: 'none', outline: 'none', padding: '10px', background: 'transparent', color: 'white', width: '100%' }}
      />
      
      {/* Container for the search button to add left border and different background */}
      <Box sx={{ 
        height: '100%', 
        backgroundColor: '#222222', 
        borderLeft: '1px solid #303030', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        width: '64px'
      }}>
        <IconButton type='submit' sx={{ color: '#aaaaaa' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default SearchBar;
