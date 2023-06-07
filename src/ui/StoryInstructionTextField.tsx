import { TextField } from '@mui/material';
import { database } from '../database';
import React from 'react';

export const StoryInstructionTextField = React.memo(() => {
  const { story } = database;
  return (
    <TextField
      id="instructionText"
      label="Instruction"
      multiline
      defaultValue={story.instruction}
      onBlur={({ target: { value } }) => {
        // Updating the instruction on setting
        story.instruction = value;
      }}
      fullWidth
    />
  );
});
