import React, { useState, useEffect } from 'react';
import {
  TextField,
} from '@mui/material';
import axios from 'axios';

export const AutocompleteTextField: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue.trim() === '') {
      return;
    }

  }, [inputValue]);

  return (
    <div style={{ position: 'relative', width: '300px', margin: '50px auto' }}>
      <TextField
        label="Search"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
