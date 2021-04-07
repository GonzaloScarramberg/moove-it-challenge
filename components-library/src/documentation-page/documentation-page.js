import React from 'react';
import { useSelector } from 'react-redux';
import 'styled-components/macro';
import Sidebar from '../shared/sidebar/sidebar';

const DocumentationPage = () => {
  const guideOverview = useSelector((state) => state.guideOverviewReducer);

  return (
    <div
      css={`
        width: 100%;
        display: flex;
      `}
    >
      <div style={{ flex: '1' }}>
        <Sidebar page='documentation' />
      </div>
      <div
        css={`
          padding: 1rem;
        `}
        style={{ flex: '3' }}
      >
        {guideOverview}
      </div>
      <div style={{ flex: '1' }} />
    </div>
  );
};

export default DocumentationPage;
