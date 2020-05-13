import { combineReducers } from 'redux';
import localizationReducer from './localization/reducer';
import sanaTextsReducer from './sanaTexts/reducer';
import userReducer from './user/reducer';
import contentReducer from './content/reducer';

export const rootReducer = combineReducers({
  localization: localizationReducer,
  sanaTexts: sanaTextsReducer,
  user: userReducer,
  content: contentReducer,
});