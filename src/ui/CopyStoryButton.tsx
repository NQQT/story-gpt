import React from 'react';
import { Button } from '@mui/material';
import { database } from '../database';

export const CopyStoryButton = React.memo(() => {
  const buttonProps: React.ComponentProps<typeof Button> = {
    variant: 'outlined',
    onClick: () => {
      // Copy to clipboard
      navigator.clipboard.writeText(database.record.story.join('\n')).then(() => {
        console.log('done');
      });
    },
    children: 'Save',
  };

  return <Button {...buttonProps} />;
});
