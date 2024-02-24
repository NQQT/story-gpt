import { createDataState } from '@common/assets';
import { SETTING_CELEBRITY_TASTING_SHOW } from '../presets/setting/celebrity';
import { PRESET_INSTRUCT_CONTINUE } from '../presets';

type Structure = {
  // Configuration
  processing: boolean;
  configs: {
    segmentLength: number;
  };
  record: {
    story: string[];
    counter: {
      token: number;
    };
  };
  story: {
    setting: string;
    instruction: string;
  };
};

export const database = createDataState<Structure>({
  configs: {
    // Recalling API after Segment of 1000.
    segmentLength: 1500
  },
  record: {
    story: [],
    counter: {
      token: 0
    }
  },
  story: {
    //     setting: `George, Jason and Mark can persuades anyone. They are able to make people believe whatever they want.
    // They love fucking women while she carries on with her days, making her unawared of what is happening even if her body reacts to them and their actions.
    // They also persuade everyone around them to believe whatever they do is absolutely normal.
    // The trio like to intermingle themselves into a loving family with children as sons of the family. They then take advantage of the mother while making sexual innuedos, hinting what they are doing to the rest of the family.
    // Once they have their fun, they will move onto the next family.`,
    // setting: SETTING_CELEBRITY_TASTING_SHOW.trim(),
    // instruction: PRESET_INSTRUCT_CONTINUE,
    setting: SETTING_CELEBRITY_TASTING_SHOW.trim(),
    instruction: PRESET_INSTRUCT_CONTINUE
  },
  processing: false
});
