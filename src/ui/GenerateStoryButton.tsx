import { Button } from '@mui/material';
import React from 'react';
import { database } from '../database';
import { DeepAI } from '../service/DeepAI';
import { PRESET_INSTRUCT_ALTERNATE, PRESET_INSTRUCT_START, PRESET_STYLE_IGNORED } from '../presets';

export const GenerateStoryButton = React.memo(() => {
  database();

  const start = () => {
    if (database.processing) {
      const deepAI = new DeepAI(database.api.key);
      // Setting the initial configuration
      deepAI.append(
        PRESET_STYLE_IGNORED,
        PRESET_INSTRUCT_ALTERNATE,
        // PRESET_ACTOR_BOYS,
        // PRESET_INSTRUCT_IGNORED
      );

      deepAI.append(`> The story summary is as follow: ${database.story.setting}`);

      if (database.record.story.length) {
        deepAI.append('> The story so far:');
        deepAI.append(...getTruncatedStory());
      }

      if (database.record.story.length) {
        // Adding Instruction to Continue
        deepAI.append(`> ${database.story.instruction}`);
      } else {
        deepAI.append(PRESET_INSTRUCT_START);
      }

      // Fetching data
      deepAI.fetch((text) => {
        if (!database.processing) return true;
        database.record.counter.token++;
        const index = database.record.story.length ? database.record.story.length - 1 : 0;
        const currentSegment = database.record.story[index] || '';
        database.record.story[index] = currentSegment + text;

        // Checking when to create segment. Easier to manage?
        if (validEndingString(text)) {
          if (currentSegment.length > database.configs.segmentLength) {
            database.record.story[index] = database.record.story[index].trim();
            // Checking paragraph counter size
            setTimeout(() => start(), 50);
            database.record.story = [...database.record.story, ''];
            return true;
          }
        }
        // Continue Processing
        database.record.story = [...database.record.story];
      });
    }
  };

  const buttonProps: React.ComponentProps<typeof Button> = {
    variant: 'outlined',
    onClick: () => {
      database.processing = !database.processing;
      start();
    },
    children: !database.processing ? 'Start' : 'stop',
  };
  return <Button {...buttonProps} />;
});

const validEndingString = (text: string) => {
  if (text.indexOf('\n') > 0) {
    const trimmed = text.trim();
    if (['"', '.'].includes(trimmed[trimmed.length - 1])) {
      // Ending must be a full stop
      return true;
    }
  }
  return false;
};

const getTruncatedStory = () => {
  const maxLength = 20000;
  const story = [...database.record.story];
  let counter = 0;
  // Get the filtered story
  const truncatedStory = story.reverse().filter((entry) => {
    const valid = counter < maxLength;
    counter += entry.length;
    return valid;
  });
  if (truncatedStory.length !== story.length) {
    truncatedStory.push('...');
    truncatedStory.push('...');
    truncatedStory.push('...');
    // truncatedStory.push(story[story.length - 1]);
  }
  return truncatedStory.reverse();
};
