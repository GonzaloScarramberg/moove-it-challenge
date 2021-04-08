import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';
import * as GSComponents from 'gs-ui-library';
import {
  ExampleFeatureList,
  FeatureField,
  ExampleFeatureField,
} from './component-overview-styles';
import useFetch from '../../shared/useFetch';

const Feature = ({ componentName, props }) => {
  const properties = { ...props };

  const data = useFetch('https://jsonplaceholder.typicode.com/users').map(
    (x) => x.name,
  );

  // eslint-disable-next-line react/prop-types
  const ExampleFeatureComponent = ({ value }) => {
    const [exampleValue, setExampleValue] = useState();

    switch (componentName) {
      case 'GSButton':
        return (
          <GSComponents.GSButton
            {...{ [properties.featureName.name]: value }}
          />
        );
      case 'GSInputText':
        return (
          <GSComponents.GSInputText
            value={exampleValue}
            onChangeValue={setExampleValue}
            {...{ [properties.featureName.name]: value }}
          />
        );
      case 'GSInputNumber':
        return (
          <GSComponents.GSInputNumber
            value={exampleValue}
            onChangeValue={setExampleValue}
            {...{ [properties.featureName.name]: value }}
          />
        );
      case 'GSAutocomplete':
        return (
          <GSComponents.GSAutocomplete
            options={data}
            value={exampleValue}
            onChangeValue={setExampleValue}
            {...{ [properties.featureName.name]: value }}
          />
        );
      case 'GSSelectInput':
        return (
          <GSComponents.GSSelectInput
            options={data}
            value={exampleValue}
            onChangeValue={setExampleValue}
            {...{ [properties.featureName.name]: value }}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <FeatureField>
      <h3>{properties.featureName.description}</h3>
      <p>{properties.description}</p>
      <ExampleFeatureList componentName={componentName}>
        {properties.exampleValues.map((item) => (
          <ExampleFeatureField key={item.id} componentName={componentName}>
            <ExampleFeatureComponent value={item.value} />
          </ExampleFeatureField>
        ))}
      </ExampleFeatureList>
      <div>
        {properties.exampleValues.map((item) => (
          <SyntaxHighlighter
            language='javascript'
            style={a11yDark}
            key={item.id}
          >
            {`<${componentName} ${properties.featureName.name}='${item.value}' />`}
          </SyntaxHighlighter>
        ))}
      </div>
    </FeatureField>
  );
};

Feature.propTypes = {
  componentName: PropTypes.string.isRequired,
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    featureName: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    exampleValues: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.bool,
        ]),
      }),
    ).isRequired,
  }).isRequired,
};

export default Feature;
