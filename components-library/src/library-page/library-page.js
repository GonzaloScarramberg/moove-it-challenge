import React from 'react';
import 'styled-components/macro';
import Sidebar from '../shared/sidebar/sidebar';
import ComponentOverview from './components-overview/component-overview';

const LibraryPage = () => (
  <div
    css={`
      display: flex;
      flex-direction: row;
    `}
  >
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
      `}
    >
      <ComponentOverview />
    </div>
    <div
      css={`
        flex: 1;
      `}
    />
  </div>
);

export default LibraryPage;
