import React from 'react';
import { storybookSetupTemplate } from '@library/storybook';
import { StoryGPTMain } from './app';

const template = storybookSetupTemplate((args) => {
  return <StoryGPTMain />;
});

export const StoryGPT = template();

export default {
  title: 'localhost',
};
