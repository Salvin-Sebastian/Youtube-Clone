import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
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
        mr: { sm: 5 },
        background: '#121212',
        display: 'flex',
        alignItems: 'center',
        width: { xs: '200px', sm: '350px' }
      }}
    >
      <input
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ border: 'none', outline: 'none', padding: '10px', background: 'transparent', color: 'white', width: '100%' }}
      />
      <IconButton type='submit' sx={{ p: '10px', color: '#aaaaaa' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
