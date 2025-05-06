import React from 'react';
import {
  TextField,
} from '@mui/material';

export const AutocompleteTextField: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '300px', margin: '50px auto' }}>
      <TextField
        label="Search"
        fullWidth
      />
    </div>
  );
};
