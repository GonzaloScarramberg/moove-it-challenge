import React from 'react';
import * as Actions from './actionTypes';
import GettingStartedOverview from '../../documentation-page/guides-overview/getting-started-overview';
import ThemesOverview from '../../documentation-page/guides-overview/themes-overview';
import UsageOverview from '../../documentation-page/guides-overview/usage-overview';

const GettingStarted = () => ({
  type: Actions.GETTING_STARTED_OVERVIEW,
  payload: <GettingStartedOverview />,
});

const Usage = () => ({
  type: Actions.USAGE_OVERVIEW,
  payload: <UsageOverview />,
});

const Themes = () => ({
  type: Actions.THEMES_OVERVIEW,
  payload: <ThemesOverview />,
});

export { GettingStarted, Usage, Themes };
