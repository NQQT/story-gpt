import { database } from '../database';
import { IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import ClearIcon from '@mui/icons-material/Clear';

export const StoryBoard = React.memo(() => {
  const {
    record: { story },
  } = database();
  return (
    <>
      {story.map((paragraph, index) => (
        <TextModificationArea
          key={index}
          value={paragraph}
          update={(value) => {
            story[index] = value;
          }}
          remove={() => {
            story.splice(index, 1);
            database.record.story = [...story];
          }}
        />
      ))}
    </>
  );
});

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      width: '25ch',
    },
    '& .MuiOutlinedInput-root': {
      position: 'relative',
    },
    '& .MuiIconButton-root': {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  },
}));

const TextModificationArea: React.FC<{ value: string; update: (value: string) => void; remove: () => void }> = ({
  value,
  update,
  remove,
}) => {
  const { root } = useStyles();
  const [state, setState] = useState(value);
  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <TextField
      className={root}
      id={`paragraph`}
      label={`paragraph`}
      multiline
      minRows={1}
      value={state}
      onChange={(event) => {
        setState(event.target.value);
      }}
      onBlur={(event) => {
        update(event.target.value);
      }}
      InputProps={{
        endAdornment: (
          <IconButton onClick={remove}>
            <ClearIcon />
          </IconButton>
        ),
      }}
      fullWidth
    />
  );
};
