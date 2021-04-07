/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import { GSButton } from 'gs-ui-library';
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
      <Link to='guides-overview'>
        <GSButton color='Primary' style='Raised' placeholder='Get Started' />
      </Link>
    </Styles.LibraryText>
  </Styles.HomeDiv>
);

export default Home;
