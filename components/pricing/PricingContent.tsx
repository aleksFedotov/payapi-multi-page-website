import React from 'react';

import { PricingWrapper, Price, PriceHeader } from './PricingContentStyles';
import FeaturesList from './FeaturesList';

import { Button } from '../shared/buttons/ButtonsStyles';

const PricingContent = () => {
  return (
    <PricingWrapper>
      <Price>
        <PriceHeader>
          <h2>Free Plan</h2>
          <p>
            Build and test using our core set of products with up to 100 API
            requests
          </p>
          <h3>$0.00</h3>
        </PriceHeader>
        <FeaturesList numberOfFeatures={3} />
        <Button className="secondary-dark">Request Access</Button>
      </Price>
      <Price>
        <PriceHeader>
          <h2>Basic Plan</h2>
          <p>
            Launch your project with unlimited requests and no contractual
            minimums
          </p>
          <h3>$249.00</h3>
        </PriceHeader>
        <FeaturesList numberOfFeatures={5} />
        <Button className="secondary-dark">Request Access</Button>
      </Price>
      <Price>
        <PriceHeader>
          <h2>Premium Plan</h2>
          <p>
            Get tailored solutions, volume pricing, and dedicated support for
            your team
          </p>
          <h3>$499.00</h3>
        </PriceHeader>
        <FeaturesList numberOfFeatures={7} />
        <Button className="secondary-dark">Request Access</Button>
      </Price>
    </PricingWrapper>
  );
};

export default PricingContent;
