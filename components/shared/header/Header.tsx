import React from 'react';
import Link from 'next/link';

import {
  HeaderWrapper,
  Navigation,
  NavigationList,
  NavigationListItem,
} from './HeaderStyles';
import { Button } from '../buttons/ButtonsStyles';
import Logo from '../../../public/assets/shared/desktop/logo.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href={'/'}>
        <a>
          <Logo />
        </a>
      </Link>
      <Navigation>
        <NavigationList>
          <NavigationListItem color="dark">
            <Link href={'/pricing'}>Pricing</Link>
          </NavigationListItem>
          <NavigationListItem color="dark">
            <Link href={'/about'}>About</Link>
          </NavigationListItem>
          <NavigationListItem color="dark">
            <Link href={'/contact'}>Contact</Link>
          </NavigationListItem>
        </NavigationList>
      </Navigation>
      <Button className="primary">Schedule a Demo</Button>
    </HeaderWrapper>
  );
};

export default Header;
