import React from 'react';

import Image from 'next/image';

import { SectionSimple, ImageWrapper } from './SimpleSectionStyles';
import { TextWrapper } from '../../shared/text-wrapper/TextWrapperStyles';
import SimpleUiImage from '../../../public/assets/home/desktop/illustration-simple-ui.svg';

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
      <ImageWrapper>
        {/* <Image
          src={'/assets/home/desktop/illustration-simple-ui.svg'}
          alt="Simple UI & UX"
          width={772}
          height={660}
        /> */}
        <SimpleUiImage />
      </ImageWrapper>
    </SectionSimple>
  );
};

export default SimpleSection;
