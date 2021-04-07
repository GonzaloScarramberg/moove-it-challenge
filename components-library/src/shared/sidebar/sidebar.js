import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as ComponentActions from '../../state-management/actions/componentActions';
import * as GuideActions from '../../state-management/actions/guideActions';
import SidebarItem from './sidebar-item';
import * as Styles from './sidebar-styles';

const componentsList = [
  { id: 1, name: 'Button' },
  { id: 2, name: 'Input Text' },
  { id: 3, name: 'Input Number' },
  { id: 4, name: 'Select Input' },
  { id: 5, name: 'Autocomplete' },
];

const guidesList = [
  { id: 1, name: 'Getting started' },
  { id: 2, name: 'Usage' },
  { id: 3, name: 'Themes' },
];

const Sidebar = ({ page }) => {
  const dispatch = useDispatch();

  const handleComponentTabSelection = (e) => {
    if (e === 'Button') {
      dispatch(ComponentActions.ButtonComponentOverview());
    } else if (e === 'Input Text') {
      dispatch(ComponentActions.InputTextComponentOverview());
    } else if (e === 'Input Number') {
      dispatch(ComponentActions.InputNumberComponentOverview());
    } else if (e === 'Autocomplete') {
      dispatch(ComponentActions.AutocompleteComponentOverview());
    } else if (e === 'Select Input') {
      dispatch(ComponentActions.SelectInputComponentOverview());
    }
  };

  const handleGuideTabSelection = (e) => {
    if (e === 'Getting started') {
      dispatch(GuideActions.GettingStarted());
    } else if (e === 'Usage') {
      dispatch(GuideActions.Usage());
    } else if (e === 'Themes') {
      dispatch(GuideActions.Themes());
    }
  };

  return (
    <Styles.SidebarDiv>
      <Styles.SidebarTitle>
        {page === 'documentation' ? <h3>Guides</h3> : <h3>Components</h3>}
      </Styles.SidebarTitle>
      <Styles.SidebarOptionsList>
        {page === 'documentation'
          ? guidesList.map((item) => (
              <SidebarItem
                key={item.id}
                itemName={item.name}
                handleTabSelection={handleGuideTabSelection}
              />
            ))
          : componentsList.map((item) => (
              <SidebarItem
                key={item.id}
                itemName={item.name}
                handleTabSelection={handleComponentTabSelection}
              />
            ))}
      </Styles.SidebarOptionsList>
    </Styles.SidebarDiv>
  );
};

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Sidebar;
