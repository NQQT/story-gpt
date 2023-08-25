import React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Toolbar, Typography } from '@mui/material';
import { database } from './database';
import { TokenCounterAccordian } from './ui/TokenCounterAccordian';
import { StorySummaryTextField } from './ui/StorySummaryTextField';
import { GenerateStoryButton } from './ui/GenerateStoryButton';
import { StoryBoard } from './ui/StoryBoard';
import { StoryInstructionTextField } from './ui/StoryInstructionTextField';
import { CopyStoryButton } from './ui/CopyStoryButton';

const drawerWidth = 400;
export const StoryGPTMain = () => {
  // Re-rendering when database state changes
  database();

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Story
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <StorySummaryTextField />
          <StoryBoard />
          <StoryInstructionTextField />
          <Box>
            <CopyStoryButton />
            <GenerateStoryButton />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const DrawerItem = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Statistic
        </Typography>
      </Toolbar>
      <TokenCounterAccordian />
      <Divider />
      <Divider />
    </Drawer>
  );
};
