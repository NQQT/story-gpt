import { createDataState } from '@common/assets';
import { PRESET_INSTRUCT_CONTINUE } from './presets';

const CELEBRITY_CUNTS = `
Celebrity Cunts is a gameshow, where female celebrities are voted by the public to join and play. Celebrities do not want to play this game, but they have to due to the public opinion.
In the game, the contestants are asked a series of questions by the host while getting fucked in the ass or cunt by their fan with the intention of making them answers incorrectly.
The fan usually succeeds in their endeavour, which allows them to facefuck their celebrities until unloading a huge amount of cum in their mouth and throat.
The celebrities are not allowed to swallow the cum, and they must try not to spill any when answering the questions.
Today's contestants are: Emma Watson, Gal Gadot, Taylor Swift and Scarlet Johansson.
`;

const CELEBRITY_WARS = `
Celebrity War is a reality gameshow, where the current hottest and sexiest celebrities team up with a fan to compete with each other through a series of challenges.
Although having no choice but to play and win, the celebrities are disgusted and very defiance. Their respective fans on other hands love the challenges, as they are allowed to do live out their fantasy with their favorite celebrities.
The first challenge has the fan asks their celebrity a series of personal questions while face fucking them, making sure they gag and choke on the cock. Once the fan satisfies with the answers, they must fill the celebrity's mouth to the brim with cum for the next challenge.
The second challenge has the celebrity holds the fan's cum in their mouth without spilling any as the fan pounds their cunt or ass hard and fast. The first one to spill will be eliminated from the game. The rest of the celebrities then receive a cream pie from their fan to conclude the challenge.
The third challenge will have the celebrity giving her fan's the best blowjob while giving a tit job towards climax, covering her face. The more cum covers her face, the better. The fan can have multiple climaxes if the celebrities do a good job.
The four challenge requires the fan and celebrity assume pile driver sex position. The fan must cum into their respective celebrity until spillages. The more spill out of her cunt during the pounding, the better.
The final round will be reserved for the winner, where the fan get the pound the celebrity as she swallows as much cum as possible from the audiences.
Today's contestants are some of the best actresses in Hollywood. Use their full name. Describe their appearances.
`;

const MOTHER_SON = `
Family Feud is a gameshow, where mother and son from four families team up for the competition. Describe each family in full details, especially the mothers.
The first challenge has the mother answering questions from the host while her son facefuck her hard, making sure she gags and chokes to answer. The more she struggles, the better. She will recieve a mouthful at the end for the next challenge.
The second challenge is holding her son's cum in her mouth as he hammers her cunt or ass from behind. She must try to not spill or swallow any of the cum in her mouth. She should let the cum stream down onto her chest at the end for the next challenge.
The third challenge is giving her son a blowjob while giving a tit job towards multiple climax. The more cum covers her face, the better.
The fourth challenge is the son pile driving his cum-covered mother, cumming multiple times into her until spillages. The more he cums, the better.
The mothers are quite reluctant even defiant to carry out the challenges, but the sons should encourage them to win.
The sons dreamed of fucking their hot mothers. They fakes their concerns and encouragements while fullfiling their dreams.
`;

const REAL_FAMILY = `
Real family is a reality show, where ones can see how a real family should behave in all sort of situations.
The first situation is where a mother waking up her son in the morning, but he has a morning wood. The motherly thing to do is help him release with her hands and mouth. She should swallow when he cums to prevent any stains on the bedding.
The second situation is where a mother makes breakfast for the entire family in her lingeries. She should focus on her task even if her son plays around with her tits and asses. She should not be distracted even if he slip his cock into her cunt and pound her hard. Even if he cums in her, she should finish making breakfast.
The third situation is where a mother helps her son in the shower. She should be able to use all her assets such as mouth and tits to clean her son's cock. She should help him releases with her cunt and ass.
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
