import React from 'react';
import { AccordianDrawerMenu } from '@common/assets';
import { database } from '../context';

export const TokenCounterAccordian = () => {
  const {
    record: {
      counter: { token }
    }
  } = database();

  const props: any = {
    name: 'Token',
    value: token
  };
  return <AccordianDrawerMenu {...props} />;
};
