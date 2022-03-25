import React from 'react';
import Link from 'next/link';

import {
  Navigation,
  NavigationList,
  NavigationListItem,
} from '../header/HeaderStyles';
import { FooterWrapper, FooterContent, Socials } from './FooterStyles';

import Logo from '../../../public/assets/shared/desktop/logo.svg';
import FacebookIcon from '../../../public/assets/shared/desktop/facebook.svg';
import TwitterIcon from '../../../public/assets/shared/desktop/twitter.svg';
import LinkedoinIcon from '../../../public/assets/shared/desktop/linkedin.svg';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Link href={'/'}>
          <a>
            <Logo />
          </a>
        </Link>
        <Navigation>
          <NavigationList>
            <NavigationListItem color="ligth">
              <Link href={'/pricing'}>Pricing</Link>
            </NavigationListItem>
            <NavigationListItem color="ligth">
              <Link href={'/about'}>About</Link>
            </NavigationListItem>
            <NavigationListItem color="ligth">
              <Link href={'/contact'}>Contact</Link>
            </NavigationListItem>
          </NavigationList>
        </Navigation>
        <Socials>
          <Link href={'#'}>
            <a>
              <FacebookIcon />
            </a>
          </Link>
          <Link href={'#'}>
            <a>
              <TwitterIcon />
            </a>
          </Link>
          <Link href={'#'}>
            <a>
              <LinkedoinIcon />
            </a>
          </Link>
        </Socials>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
