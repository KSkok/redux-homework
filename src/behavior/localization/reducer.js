import { LANGUAGE_CHANGED } from './actions';
import { LANGUAGES } from './constants';

const initialState = {
  languageId: LANGUAGES.EN,
};

const localizationReducer = (state = initialState, action) => {
  if (action.type === LANGUAGE_CHANGED)
    return { ...state, languageId: action.payload.languageId };

  return state;
};

export default localizationReducer;
