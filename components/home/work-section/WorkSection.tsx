import React from 'react';

import { Section, ContentWrapper } from './WorkSectionStyles';
import { TextWrapper } from '../../shared/text-wrapper/TextWrapperStyles';
import { Button } from '../../shared/UI/ButtonsStyles';
import Copmanies from '../../shared/copmanies/Copmanies';

const WorkSection: React.FC = () => {
  return (
    <Section>
      <ContentWrapper>
        <TextWrapper color="white">
          <h2>Who we work with</h2>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{' '}
          </p>
          <Button className="secondary-ligth">About Us</Button>
        </TextWrapper>
        <Copmanies color="light" />
      </ContentWrapper>
    </Section>
  );
};

export default WorkSection;
