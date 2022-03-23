import type { NextPage } from 'next';
import Head from 'next/head';

import { Button } from '../components/shared/buttons/ButtonsStyles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayAPI Website</title>
        <meta name="description" content="PayAPI Website with NextJS" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <div>
        <Button className="primary" disabled={true}>
          Schedule a Demo
        </Button>
        <Button className="secondary-ligth" disabled={true}>
          About Us
        </Button>
        <Button className="secondary-dark" disabled={true}>
          Submit Query
        </Button>
        <Button className="primary" disabled={false}>
          Schedule a Demo
        </Button>
        <Button className="secondary-ligth" disabled={false}>
          About Us
        </Button>
        <Button className="secondary-dark" disabled={false}>
          Submit Query
        </Button>
      </div>
    </>
  );
};

export default Home;
