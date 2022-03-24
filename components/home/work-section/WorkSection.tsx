import React from 'react';

import {
  Section,
  ContentWrapper,
  ContentTextWrapper,
  ComapaniesGrid,
} from './WorkSectionStyles';

import { Button } from '../../shared/buttons/ButtonsStyles';

import Tesla from '../../../public/assets/shared/desktop/tesla.svg';
import Microcoft from '../../../public/assets/shared/desktop/microsoft.svg';
import HP from '../../../public/assets/shared/desktop/hewlett-packard.svg';
import Oracle from '../../../public/assets/shared/desktop/oracle.svg';
import Google from '../../../public/assets/shared/desktop/google.svg';
import NVidia from '../../../public/assets/shared/desktop/nvidia.svg';

const WorkSection: React.FC = () => {
  return (
    <Section>
      <ContentWrapper>
        <ContentTextWrapper>
          <h2>Who we work with</h2>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{' '}
          </p>
          <Button className="secondary-ligth">About Us</Button>
        </ContentTextWrapper>
        <ComapaniesGrid>
          <Tesla />
          <Microcoft />
          <HP />
          <Oracle />
          <Google />
          <NVidia />
        </ComapaniesGrid>
      </ContentWrapper>
    </Section>
  );
};

export default WorkSection;
