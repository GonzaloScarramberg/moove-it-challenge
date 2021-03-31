import * as Actions from '../actions/actionTypes';
import buttonComponentOverview from '../../data/buttonComponentOverview.json';

const componentOverviewReducer = (state = buttonComponentOverview, action) => {
  switch (action.type) {
    case Actions.BUTTON_OVERVIEW:
      return action.payload;
    case Actions.INPUT_TEXT_OVERVIEW:
      return action.payload;
    case Actions.INPUT_NUMBER_OVERVIEW:
      return action.payload;
    case Actions.AUTOCOMPLETE_OVERVIEW:
      return action.payload;
    case Actions.SELECT_INPUT_OVERVIEW:
      return action.payload;
    default:
      return state;
  }
};

export default componentOverviewReducer;
