import React from 'react';
import PropTypes from 'prop-types';
import { APITableField } from './component-overview-styles';

const APITable = ({ apiProperties }) => {
  const Apis = () => (
    <tbody>
      {apiProperties.map((item) => (
        <tr key={item.id}>
          <td>{item.propertyName}</td>
          <td>{item.defaultValue}</td>
          <td>{item.description}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <APITableField>
      <h2>API</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Default value</th>
            <th>Description</th>
          </tr>
        </tbody>
        <Apis />
      </table>
    </APITableField>
  );
};

APITable.propTypes = {
  apiProperties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      propertyName: PropTypes.string.isRequired,
      defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default APITable;
