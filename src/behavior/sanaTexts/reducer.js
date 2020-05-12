import { SANA_TEXTS_RECEIVED } from './actions';

const initialState = {
  texts: [],
};

const sanaTextsReducer = (state = initialState, action) => {
  if (action.type === SANA_TEXTS_RECEIVED)
    return { ...state, texts: action.payload.texts };

  return state;
};

export default sanaTextsReducer;
