import React from 'react';

import { ComapaniesGrid } from './CopmaniesStyles';
import Tesla from '../../../public/assets/shared/desktop/tesla.svg';
import Microcoft from '../../../public/assets/shared/desktop/microsoft.svg';
import HP from '../../../public/assets/shared/desktop/hewlett-packard.svg';
import Oracle from '../../../public/assets/shared/desktop/oracle.svg';
import Google from '../../../public/assets/shared/desktop/google.svg';
import NVidia from '../../../public/assets/shared/desktop/nvidia.svg';

const Copmanies: React.FC<{ color: string }> = ({ color }) => {
  return (
    <ComapaniesGrid color={color}>
      <Tesla />
      <Microcoft />
      <HP />
      <Oracle />
      <Google />
      <NVidia />
    </ComapaniesGrid>
  );
};

export default Copmanies;
