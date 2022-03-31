import React from 'react';

import Link from 'next/link';

import {
  Navigation,
  NavigationList,
  NavigationListItem,
} from '../header/HeaderStyles';

import { MobileMenuWrapper } from './MobileMenuStyles';

import { Button } from '../UI/ButtonsStyles';

const MobileMenu: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  const linkHanlder = () => {
    toggleMenu();
    document.body.style.overflow = 'visible';
  };

  const MobileMenuVariants = {
    initial: { x: 300 },
    animate: { x: 0, transition: { duration: 0.75 } },
    exit: { x: 300, transition: { duration: 0.75 } },
  };

  return (
    <MobileMenuWrapper
      initial="initial"
      animate="animate"
      exit="exit"
      variants={MobileMenuVariants}
    >
      <Navigation>
        <NavigationList>
          <NavigationListItem color="ligth" onClick={linkHanlder}>
            <Link href={'/pricing'}>Pricing</Link>
          </NavigationListItem>
          <NavigationListItem color="ligth" onClick={linkHanlder}>
            <Link href={'/about'}>About</Link>
          </NavigationListItem>
          <NavigationListItem color="ligth" onClick={linkHanlder}>
            <Link href={'/contact'}>Contact</Link>
          </NavigationListItem>
        </NavigationList>
      </Navigation>
      <Button className="primary">Schedule a Demo</Button>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
