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
            maxOutputTokens: 1000,
            temperature: 1.0,
            topP: 0.8,
            topK: 10
          },
          safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE }
          ]
        });

        const msg = storySoFar.join('\n');

        const result = await chat.sendMessage(msg);
        database.record.story.push(result.response.text().trim());
        database.processing = false;

        return;
        // const result = await chat.sendMessageStream(storySoFar.join('\n'));
        // let length = 0;
        // for await (const chunk of result.stream) {
        //   const chunkText = chunk.text();
        //   console.log(chunkText);
        //   length += chunkText.length;
        // }
        // console.log('done', length);
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
