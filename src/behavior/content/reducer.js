import { ADD_TEXT, CHANGE_TEXT } from './actions';

const initialState = {
  texts: JSON.parse(localStorage.getItem('texts')) || [],
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        texts: [...state.texts, action.payload.text],
      };
    case CHANGE_TEXT:
      return {
        ...state,
        texts: state.texts.map(text => {
          return text.sanaTextId === action.payload.text.sanaTextId
            ? action.payload.text
            : text;
        }),
      };

    default:
      return state;
  }
};

export default contentReducer;