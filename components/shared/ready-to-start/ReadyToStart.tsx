import React from 'react';

import { ReadyToStartWrapper } from './ReadyToStartStyles';
import DemoEmailInput from '../demo-email-input/DemoEmailInput';

const ReadyToStart: React.FC = () => {
  return (
    <ReadyToStartWrapper>
      <h2>Ready to start?</h2>
      <DemoEmailInput />
    </ReadyToStartWrapper>
  );
};

export default ReadyToStart;
