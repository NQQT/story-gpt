import { createDataState } from '@common/assets';
import { PRESET_INSTRUCT_CONTINUE } from './presets';

const CELEBRITY_CUNTS = `
Celebrity Cunts is a gameshow, where female celebrities are voted by the public to join and play. Celebrities do not want to play this game, but they have to due to the public opinion.
In the game, the contestants are asked a series of questions by the host while getting fucked in the ass or cunt by their fan with the intention of making them answers incorrectly.
The fan usually succeeds in their endeavour, which allows them to facefuck their celebrities until unloading a huge amount of cum in their mouth and throat.
The celebrities are not allowed to swallow the cum, and they must try not to spill any when answering the questions.
Today's contestants are: Emma Watson, Gal Gadot, Taylor Swift and Scarlet Johansson.
`;

const MOTHER_SON = `
Family Feud is a gameshow, where family of four is seperated in two teams: mother and son, father and daughter.
They will compete with each other in a series of challenges to win a prize. The more challenges they complete, the better the prize.
Some of the challenges are mother and daughter holding as much cum in their mouth from their respective partner while trying to answers questions.
Other challenges are mother and daughter getting pounded hard and fast, trying to accomplish a task.
They are quite reluctant to carry out the challenges, but the prize is too much to ignore.
The father and son secretly enjoys this. They fakes their concerns and encouragements while pounding their respective partners with delight.
`;

export const database = createDataState({
  configs: {
    // Recalling API after Segment of 1000.
    segmentLength: 1000,
  },
  record: {
    story: [],
    counter: {
      token: 0,
    },
  },
  api: {
    key: '18d2ca9d-cc27-41b5-a696-01fa82f8fccf',
  },
  story: {
    //     setting: `George, Jason and Mark can persuades anyone. They are able to make people believe whatever they want.
    // They love fucking women while she carries on with her days, making her unawared of what is happening even if her body reacts to them and their actions.
    // They also persuade everyone around them to believe whatever they do is absolutely normal.
    // The trio like to intermingle themselves into a loving family with children as sons of the family. They then take advantage of the mother while making sexual innuedos, hinting what they are doing to the rest of the family.
    // Once they have their fun, they will move onto the next family.`,
    setting: MOTHER_SON.trim(),
    instruction: PRESET_INSTRUCT_CONTINUE,
  },
  processing: false,
});
