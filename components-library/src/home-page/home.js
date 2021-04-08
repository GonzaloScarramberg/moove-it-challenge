import React from 'react';
import 'styled-components/macro';
import * as Styles from './homeStyles';

const Home = () => (
  <Styles.HomeDiv>
    <Styles.LibraryText>
      <h1>GS UI Library</h1>
      <h2>Modern react library</h2>
      <Styles.GetStartedLink to='guides-overview' className='btn'>
        Get started
      </Styles.GetStartedLink>
    </Styles.LibraryText>
  </Styles.HomeDiv>
);

export default Home;
