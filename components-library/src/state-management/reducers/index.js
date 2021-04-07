import { combineReducers } from 'redux';
import componentOverviewReducer from './componentOverviewReducer';
import guideOverviewReducer from './guideOverviewReducer';

const reducers = combineReducers({
  componentOverviewReducer,
  guideOverviewReducer,
});

export default reducers;
