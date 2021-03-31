import React from 'react';
import { useSelector } from 'react-redux';
import Feature from './feature';
import APITable from './apiTable';

const componentOverviewStyles = {
  padding: '1rem',
};

const ComponentOverview = () => {
  const componentOverview = useSelector(
    (state) => state.componentOverviewReducer,
  );

  return (
    <div style={componentOverviewStyles}>
      <h2>{componentOverview.name}</h2>
      <p>{componentOverview.description}</p>
      <h2>Usage</h2>
      <h3>Import</h3>
      <div
        style={{
          backgroundColor: '#DEDBDA',
          borderRadius: '4px',
          padding: '0.6rem',
        }}
      >
        <pre>
          <code>
            {`import { ${componentOverview.componentName} } from 'gs-ui-library';`}
          </code>
        </pre>
      </div>
      <h3>Features</h3>
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
