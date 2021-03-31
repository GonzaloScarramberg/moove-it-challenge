import React from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../../state-management/actions/actions';
import SidebarItem from './sidebar-item';

const SidebarStyles = {
  display: 'flex',
  width: '100%',
  height: '500px',
  flexDirection: 'column',
  borderRight: '1px solid rgba(0,0,0,.12)',
};

const itemsList = [
  { id: 1, name: 'Button' },
  { id: 2, name: 'Input Text' },
  { id: 3, name: 'Input Number' },
  { id: 4, name: 'Select Input' },
  { id: 5, name: 'Autocomplete' },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleTabSelection = (e) => {
    if (e === 'Button') {
      dispatch(Actions.ButtonComponentOverview());
    } else if (e === 'Input Text') {
      dispatch(Actions.InputTextComponentOverview());
    } else if (e === 'Input Number') {
      dispatch(Actions.InputNumberComponentOverview());
    } else if (e === 'Autocomplete') {
      dispatch(Actions.AutocompleteComponentOverview());
    } else if (e === 'Select Input') {
      dispatch(Actions.SelectInputComponentOverview());
    }
  };

  return (
    <div style={SidebarStyles}>
      <div
        style={{
          height: '15%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0,0,0,.12)',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <h3>Components</h3>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '85%',
          justifyContent: 'space-between',
        }}
      >
        {itemsList.map((item) => (
          <SidebarItem
            key={item.id}
            itemName={item.name}
            handleTabSelection={handleTabSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
