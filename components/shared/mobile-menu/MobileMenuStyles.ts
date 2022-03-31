import styled from 'styled-components';

import { motion } from 'framer-motion';

export const MobileMenuWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 66.7rem;
  background-color: var(--color-mirage-blue);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 9.4rem 2.4rem 0;
  overflow: hidden;

  button {
    width: 100%;

    &.menu {
      margin: 4.8rem 0 2.4rem auto;
    }
  }

  nav {
    position: relative;
    border-top: 1px solid rgba(251, 252, 254, 0.15);
    padding-top: 4.5rem;
    margin-bottom: 3.5rem;
    z-index: 4;
  }
`;
