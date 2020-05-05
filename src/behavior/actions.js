export const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';
export const newLanguageId = languageId => ({
  type: LANGUAGE_CHANGED,
  payload: {
    languageId,
  },
});
