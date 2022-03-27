import React from 'react';

import { SectionSimple } from './SimpleSectionStyles';
import { TextWrapper } from '../../shared/text-wrapper/TextWrapperStyles';

const SimpleSection = () => {
  return (
    <SectionSimple>
      <TextWrapper color="dark">
        <h2>Simple UI & UX</h2>
        <p>
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </TextWrapper>

      <img
        src={'/assets/home/desktop/illustration-simple-ui.svg'}
        alt="Simple UI & UX"
      />
    </SectionSimple>
  );
};

export default SimpleSection;
