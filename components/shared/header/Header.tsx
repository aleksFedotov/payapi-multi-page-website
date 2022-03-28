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
import MenuIcon from '../../../public/assets/shared/mobile/menu.svg';
import CloseIcon from '../../../public/assets/shared/mobile/close.svg';

const Header: React.FC<{ toggleMenu: () => void; isOpened: boolean }> = ({
  toggleMenu,
  isOpened,
}) => {
  const toggleMenuHandler = () => {
    toggleMenu();
    if (isOpened) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <HeaderWrapper>
      <Link href={'/home'}>
        <a>
          <Logo />
        </a>
      </Link>
      <Navigation type="header">
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
      <Button className="menu" onClick={toggleMenuHandler}>
        {isOpened ? <CloseIcon /> : <MenuIcon />}
      </Button>
    </HeaderWrapper>
  );
};

export default Header;
