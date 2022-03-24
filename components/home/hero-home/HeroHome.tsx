import React from 'react';
import { HeroTextWrapper, HeroWrapper, HeroText } from './HeroHomeStyles';
import Link from 'next/link';
import DemoEmailInput from '../../shared/demo-email-input/DemoEmailInput';
import Phone from '../../../public/assets/home/desktop/illustration-phone-mockup.svg';

const HeroHome: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroTextWrapper>
        <h1>Start building with our APIs for absolutely free.</h1>
        <DemoEmailInput />
        <HeroText>
          Have any questions? <Link href={'/contact'}>Contact Us</Link>
        </HeroText>
      </HeroTextWrapper>
      <Phone />
    </HeroWrapper>
  );
};

export default HeroHome;
