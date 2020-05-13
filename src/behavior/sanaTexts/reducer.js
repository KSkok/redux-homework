import { SANA_TEXTS_RECEIVED, CHANGE_SANA_TEXT } from './actions';
import { LANGUAGES } from '../localization';

const initialState = {
  texts: [],
};

const sanaTextsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SANA_TEXTS_RECEIVED:
      return { ...state, texts: action.payload.texts };
    case CHANGE_SANA_TEXT:
      return {
        ...state,
        texts: state.texts.map(text => {
          if (text.languageId === LANGUAGES.EN) {
            return {
              languageId: text.languageId,
              translations: text.translations.map(translation => {
                return translation.key === action.payload.text.sanaTextId
                  ? { key: action.payload.text.sanaTextId, value: action.payload.text.defaultLanguage }
                  : translation;
              }),
            };
          }
          else {
            return {
              languageId: text.languageId,
              translations: text.translations.map(translation => {
                return translation.key === action.payload.text.sanaTextId
                  ? { key: action.payload.text.sanaTextId, value: action.payload.text.alternativeLanguage }
                  : translation;
              }),
            };
          }
        }),
      };

    default:
      return state;
  }
};

export default sanaTextsReducer;
