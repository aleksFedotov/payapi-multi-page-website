import type { NextPage } from 'next';
import Head from 'next/head';

import { HeadingPrimary } from '../../components/shared/UI/Heading';
import {
  AboutContainer,
  AboutTextWrapper,
  ThumbnailContainer,
  CompanySummary,
  SummaryItem,
} from '../../components/about/AboutStyles';

import ReadyToStart from '../../components/shared/ready-to-start/ReadyToStart';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayAPI Website</title>
        <meta name="description" content="PayAPI Website with NextJS" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <AboutContainer>
        <HeadingPrimary>
          We empower innovators by delivering access to the financial system
        </HeadingPrimary>
        <AboutTextWrapper>
          <h2>Our Vision</h2>
          <p>
            {
              ' Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.'
            }
          </p>
        </AboutTextWrapper>
        <AboutTextWrapper>
          <h2>Our Business</h2>
          <p>
            {
              'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.'
            }
          </p>
        </AboutTextWrapper>
      </AboutContainer>
      <ThumbnailContainer>
        <picture>
          <source
            srcSet={'/assets/about/mobile/image-team-members.jpg'}
            media={'(max-width: 650px)'}
          />
          <source
            srcSet={'/assets/about/tablet/image-team-members.jpg'}
            media={'(max-width: 950px)'}
          />

          <img
            src={'/assets/about/desktop/image-team-members.jpg'}
            alt={'Team members'}
          />
        </picture>
      </ThumbnailContainer>
      <CompanySummary>
        <SummaryItem>
          <p>Team Members</p>
          <h3>300+</h3>
        </SummaryItem>
        <SummaryItem>
          <p>Offices in the US</p>
          <h3>3</h3>
        </SummaryItem>
        <SummaryItem>
          <p>Transactions analyzed</p>
          <h3>10M+</h3>
        </SummaryItem>
      </CompanySummary>
      <AboutContainer>
        <AboutTextWrapper>
          <h2>The Culture</h2>
          <p>
            {
              "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
            }
          </p>
        </AboutTextWrapper>
        <AboutTextWrapper>
          <h2>The People</h2>
          <p>
            {
              "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diversebackgrounds and skills."
            }
          </p>
        </AboutTextWrapper>
      </AboutContainer>
      <ReadyToStart />
    </>
  );
};

export default About;
