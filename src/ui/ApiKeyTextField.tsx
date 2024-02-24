import { TextField } from '@mui/material';
import { database } from '../context';
import React from 'react';

export const ApiKeyTextField = React.memo(() => {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Multiline"
      rows={1}
      defaultValue={database.api.key}
      onChange={(value) => {
        database.api.key = value.target.value;
      }}
      fullWidth
    />
  );
});
