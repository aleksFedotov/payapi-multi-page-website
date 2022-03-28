import React from 'react';

import Link from 'next/link';

import {
  Navigation,
  NavigationList,
  NavigationListItem,
} from '../header/HeaderStyles';

import { MobileMenuWrapper } from './MobileMenuStyles';

import { Button } from '../buttons/ButtonsStyles';

const MobileMenu: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  const linkHanlder = () => {
    toggleMenu();
    document.body.style.overflow = 'visible';
  };
  return (
    <MobileMenuWrapper>
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
      <Button className="primary">Schedule a Demo</Button>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
