import React from 'react';
import 'styled-components/macro';
import * as Styles from './homeStyles';

const Home = () => (
  <Styles.HomeDiv>
    <Styles.LibraryText>
      <h1
        css={`
          font-size: 4rem;
          font-weight: 400;
          margin-bottom: 0;
        `}
      >
        GS UI Library
      </h1>
      <h2
        css={`
          font-weight: 300;
        `}
      >
        {' '}
        React components for your application
      </h2>
      <Styles.GetStartedLink to='guides-overview' className='btn'>
        Get started
      </Styles.GetStartedLink>
    </Styles.LibraryText>
  </Styles.HomeDiv>
);

export default Home;
