import { TextField } from '@mui/material';
import { database } from '../database';
import React from 'react';

export const StorySummaryTextField = () => {
  const { story } = database;

  return (
    <TextField
      id="summaryText"
      label="Text summary"
      multiline
      defaultValue={story.setting}
      onBlur={({ target: { value } }) => {
        // Only update values on blur
        story.setting = value;
      }}
      fullWidth
    />
  );
};
