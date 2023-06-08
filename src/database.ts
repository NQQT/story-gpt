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
Family Feud is a gameshow, where mother and son from each families compete with each other.
They will compete with each other in a series of challenges to win a prize. The more challenges they complete, the better the prize.
The first challenge is the mother answering the questions while getting face fucked and cummed on by their son.
The second challenge is holding cum in their mouth as their son pounds them hard from behind. They must try to not spill or swallow any.
The third challenge is giving their son a blowjob while giving a tit job.
They are quite reluctant to carry out the challenges, but the prize is too much to ignore.
The father and son secretly enjoys this. They fakes their concerns and encouragements while pounding their respective partners with delight.
`;

const BUKKAKE_NEWS = `
Only women can be anchors.
Women are delivering the news behind a see-through table while countless of men, one by one climbs onto the table to fuck their face, filling their mouth with cum or painting their face with their cum.
The women should ignore all these men as they delivery news, gasping and moaning. They should not be bothered with cum dripping out of their lips or streaming down their facial features.
Men will come and pound her cunt or ass hard as she deliver the latest news. Once the man cums in them, another man will take his place to repeat the cycle.
`;

const DEPRAVED_HOLLYWOOD = `
Female characters in movies being constantly fucked in the ass or cunt and being plastered with cum by background characters.
These female characters should ignore the background characters, continuing on what whatever they were doing according to the plot of the film.
The actresses use their actual names in the film.
The Terminator is being played on the big screen.
`;

const POLICE_PAY = `
Crimes are all related to sexual frustrated individuals. 
A new law has been passed that all patrolling police are sexy female, capable of releasing sexual tension of crimnals before they can commit the crime.
A group of teenagers make some sexual remarks at bystanders, and they are deemed to be sexually frustrated.
`;

export const database = createDataState({
  configs: {
    // Recalling API after Segment of 1000.
    segmentLength: 1500,
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
