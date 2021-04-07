import * as Actions from './actionTypes';
import autocompleteComponentOverview from '../../data/autocompleteComponentOverview.json';
import buttonComponentOverview from '../../data/buttonComponentOverview.json';
import inputNumberComponentOverview from '../../data/inputNumberComponentOverview.json';
import inputTextComponentOverview from '../../data/inputTextComponentOverview.json';
import selectInputComponentOverview from '../../data/selectInputComponentOverview.json';

const ButtonComponentOverview = () => ({
  type: Actions.BUTTON_OVERVIEW,
  payload: buttonComponentOverview,
});

const InputNumberComponentOverview = () => ({
  type: Actions.INPUT_NUMBER_OVERVIEW,
  payload: inputNumberComponentOverview,
});

const InputTextComponentOverview = () => ({
  type: Actions.INPUT_TEXT_OVERVIEW,
  payload: inputTextComponentOverview,
});

const AutocompleteComponentOverview = () => ({
  type: Actions.AUTOCOMPLETE_OVERVIEW,
  payload: autocompleteComponentOverview,
});

const SelectInputComponentOverview = () => ({
  type: Actions.SELECT_INPUT_OVERVIEW,
  payload: selectInputComponentOverview,
});

export {
  ButtonComponentOverview,
  InputNumberComponentOverview,
  InputTextComponentOverview,
  AutocompleteComponentOverview,
  SelectInputComponentOverview,
};
