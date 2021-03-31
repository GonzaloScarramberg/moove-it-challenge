import React from 'react';
import PropTypes from 'prop-types';

const SidebarItem = ({ itemName, handleTabSelection }) => (
  <button
    type='button'
    style={{ fontSize: '1rem', flex: '1 1 auto', padding: '1rem' }}
    onClick={() => handleTabSelection(itemName)}
  >
    {itemName}
  </button>
);

SidebarItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  handleTabSelection: PropTypes.func.isRequired,
};

export default SidebarItem;
