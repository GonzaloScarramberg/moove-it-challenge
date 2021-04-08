import React from 'react';
import { useSelector } from 'react-redux';
import 'styled-components/macro';
import Sidebar from '../shared/sidebar/sidebar';

const DocumentationPage = () => {
  const guideOverview = useSelector((state) => state.guideOverviewReducer);

  React.useEffect(() => {}, []);

  return (
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
        <Sidebar page='documentation' />
      </div>
      <div
        css={`
          flex: 3;
        `}
      >
        {guideOverview}
      </div>
      <div
        css={`
          flex: 1;
        `}
      />
    </div>
  );
};

export default DocumentationPage;
