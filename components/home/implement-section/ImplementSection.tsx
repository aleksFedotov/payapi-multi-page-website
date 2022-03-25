import React from 'react';

import { SectionImplement } from './ImplementSectionStyles';
import { TextWrapper } from '../../shared/text-wrapper/TextWrapperStyles';
import Image from 'next/image';

const ImplementSection = () => {
  return (
    <SectionImplement>
      <Image
        src={'/assets/home/desktop/illustration-easy-to-implement.svg'}
        alt="Implement"
        width={605}
        height={444}
      />

      <TextWrapper color="dark">
        <h2>Easy to implement</h2>
        <p>
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </TextWrapper>
    </SectionImplement>
  );
};

export default ImplementSection;
