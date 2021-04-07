import React from 'react';
import 'styled-components/macro';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useSelector } from 'react-redux';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Feature from './feature';
import APITable from './apiTable';

const ComponentOverview = () => {
  const componentOverview = useSelector(
    (state) => state.componentOverviewReducer,
  );

  return (
    <div
      css={`
        padding: 1rem;
      `}
    >
      <h1>{componentOverview.name}</h1>
      <p>{componentOverview.description}</p>
      <h2>Usage</h2>
      <h3>Import</h3>
      <div>
        <SyntaxHighlighter language='javascript' style={a11yDark}>
          {`import { ${componentOverview.componentName} } from 'gs-ui-library';`}
        </SyntaxHighlighter>
      </div>
      <h2>Features</h2>
      {componentOverview.features.map((x) => (
        <Feature
          key={x.id}
          componentName={componentOverview.componentName}
          props={x}
        />
      ))}
      <APITable apiProperties={componentOverview.api} />
    </div>
  );
};

export default ComponentOverview;
