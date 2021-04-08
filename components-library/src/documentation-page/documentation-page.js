import React from 'react';
import { useSelector } from 'react-redux';
import 'styled-components/macro';
import Sidebar from '../shared/sidebar/sidebar';
import DocumentationPageDiv from './guides-overview/guides-overview-styles';

const DocumentationPage = () => {
  const guideOverview = useSelector((state) => state.guideOverviewReducer);

  React.useEffect(() => {}, []);

  return (
    <DocumentationPageDiv>
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
          @media (max-width: 700px) {
            flex: 5;
          }
        `}
      >
        {guideOverview}
      </div>
      <div
        css={`
          flex: 1;
          @media (max-width: 700px) {
            display: none;
          }
        `}
      />
    </DocumentationPageDiv>
  );
};

export default DocumentationPage;
