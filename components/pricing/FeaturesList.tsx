import React from 'react';

import { PricingList, ListItem } from './PricingContentStyles';

import CheckIcon from '../../public/assets/pricing/icon-check.svg';

const FeaturesList: React.FC<{ numberOfFeatures: number }> = ({
  numberOfFeatures,
}) => {
  const features = [
    'Transactions',
    'Auth',
    'Identity',
    'Investments',
    'Assets',
    'Liabilities',
    'Income',
  ];

  return (
    <PricingList>
      {features.map((feature, ind) => (
        <ListItem key={ind} marked={ind + 1 <= numberOfFeatures}>
          <div>{ind + 1 <= numberOfFeatures && <CheckIcon />}</div>
          <p>{feature}</p>
        </ListItem>
      ))}
    </PricingList>
  );
};

export default FeaturesList;
