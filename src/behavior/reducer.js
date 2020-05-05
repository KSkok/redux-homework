import { LANGUAGE_CHANGED } from './actions';
import { LANGUAGES } from './languages';

const initialState = {
  languageId: LANGUAGES.EN,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === LANGUAGE_CHANGED)
    return { ...state, languageId: action.payload.languageId };

  return state;
};

export default rootReducer;
