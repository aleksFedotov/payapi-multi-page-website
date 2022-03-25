import React from 'react';

import Image from 'next/image';

import { SectionFeatures, Feature } from './FeaturesSectiomStyles';

const FeatureSection = () => {
  return (
    <SectionFeatures>
      <Feature>
        <Image
          src={'/assets/home/desktop/icon-personal-finances.svg'}
          alt="Personal Finances"
          width={106}
          height={106}
        />
        <h3>Personal Finances</h3>
        <p>
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </p>
      </Feature>
      <Feature>
        <Image
          src={'/assets/home/desktop/icon-banking-and-coverage.svg'}
          alt="Personal Finances"
          width={106}
          height={106}
        />
        <h3>Banking & Coverage</h3>
        <p>
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </p>
      </Feature>
      <Feature>
        <Image
          src={'/assets/home/desktop/icon-consumer-payments.svg'}
          alt="Personal Finances"
          width={106}
          height={106}
        />
        <h3>Consumer Payments</h3>
        <p>
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </p>
      </Feature>
    </SectionFeatures>
  );
};

export default FeatureSection;
