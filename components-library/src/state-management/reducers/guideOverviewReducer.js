import React from 'react';
import * as Actions from '../actions/actionTypes';
import GettingStartedOverview from '../../documentation-page/guides-overview/getting-started-overview';

const guideOverviewReducer = (state = <GettingStartedOverview />, action) => {
  switch (action.type) {
    case Actions.GETTING_STARTED_OVERVIEW:
      return action.payload;
    case Actions.USAGE_OVERVIEW:
      return action.payload;
    case Actions.THEMES_OVERVIEW:
      return action.payload;
    default:
      return state;
  }
};

export default guideOverviewReducer;
