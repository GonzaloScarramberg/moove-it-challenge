import React from 'react';
import PropTypes from 'prop-types';
import * as GSComponents from 'gs-ui-library';
import {
  ExampleFeatureList,
  FeatureField,
  ExampleFeatureField,
} from './component-overview-styles';

const Feature = ({ componentName, props }) => {
  const properties = { ...props };

  // eslint-disable-next-line react/prop-types
  const ExampleFeatureComponent = ({ value }) => {
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
            {...{ [properties.featureName.name]: value }}
          />
        );
      case 'GSInputNumber':
        return (
          <GSComponents.GSInputNumber
            {...{ [properties.featureName.name]: value }}
          />
        );
      case 'GSAutocomplete':
        return (
          <GSComponents.GSAutocomplete
            {...{ [properties.featureName.name]: value }}
          />
        );
      case 'GSSelectInput':
        return (
          <GSComponents.GSSelectInput
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
          <ExampleFeatureField key={item} componentName={componentName}>
            <ExampleFeatureComponent value={item} />
          </ExampleFeatureField>
        ))}
      </ExampleFeatureList>
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
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    ).isRequired,
  }).isRequired,
};

export default Feature;
