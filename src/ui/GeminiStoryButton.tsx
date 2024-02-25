import React from 'react';
import { database } from '../context';
import { Button } from '@mui/material';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { GEMINI_API_KEY } from '@keys/api';

export const GeminiStoryButton = React.memo(() => {
  database();
  const start = () => {
    if (database.processing) {
      // Getting Gemini AI
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

      const run = async () => {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        let storySoFar: string[] = [`${database.story.setting}`];

        if (database.record.story.length) {
          // Building a Story
          storySoFar = [...storySoFar, ...getTruncatedStory()];
        }

        // Adding Instruction to Continue
        storySoFar.push(`${database.story.instruction}`);

        const chat = model.startChat({
          generationConfig: {
            maxOutputTokens: 1000
          },
          safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE }
          ]
        });

        const msg = storySoFar.join('\n');

        console.log('payload', msg);

        // const result = await chat.sendMessage(msg);
        // database.record.story.push(result.response.text().trim());
        // database.processing = false;
        //
        // return;
        const result = await chat.sendMessageStream(msg);
        // Get the Story Index
        const index = database.record.story.length;
        // Creating a new value
        database.record.story.push('');
        for await (const chunk of result.stream) {
          // Getting the text
          const text = chunk.text();
          database.record.story[index] += text;
          // Causing a Refresh
          database.record.story = [...database.record.story];

          // Automatically break.
          if (validEndingString(text.trim())) {
            // Checking if the segmenth length has been reached
            if (database.record.story[index].length > database.configs.segmentLength) {
              console.log('stopping');
              break;
            }
          }
        }

        // database.processing = false;
        // Repeat Until Stop.
        setTimeout(() => start(), 50);
      };

      run();
    }
  };

  const buttonProps: React.ComponentProps<typeof Button> = {
    variant: 'outlined',
    onClick: () => {
      database.processing = !database.processing;
      start();
    },
    children: !database.processing ? 'Start Gemini' : 'Stop Gemini'
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
  const truncatedStory: any[] = story.reverse().filter((entry: any) => {
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
