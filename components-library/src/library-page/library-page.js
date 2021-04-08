import React from 'react';
import 'styled-components/macro';
import Sidebar from '../shared/sidebar/sidebar';
import ComponentOverview from './components-overview/component-overview';
import { LibraryPageDiv } from './components-overview/component-overview-styles';

const LibraryPage = () => (
  <LibraryPageDiv>
    <div
      css={`
        flex: 1;
      `}
    >
      <Sidebar page='components' />
    </div>
    <div
      css={`
        flex: 3;
        @media (max-width: 700px) {
          flex: 5;
        }
      `}
    >
      <ComponentOverview />
    </div>
    <div
      css={`
        flex: 1;
        @media (max-width: 700px) {
          display: none;
        }
      `}
    />
  </LibraryPageDiv>
);

export default LibraryPage;
