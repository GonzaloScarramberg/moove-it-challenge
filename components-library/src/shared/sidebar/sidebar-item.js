import React from 'react';
import PropTypes from 'prop-types';
import { SidebarItemButton } from './sidebar-styles';

const SidebarItem = ({ itemName, handleTabSelection }) => (
  <SidebarItemButton type='button' onClick={() => handleTabSelection(itemName)}>
    {itemName}
  </SidebarItemButton>
);

SidebarItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  handleTabSelection: PropTypes.func.isRequired,
};

export default SidebarItem;
