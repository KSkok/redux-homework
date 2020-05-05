export const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';
export const setLanguage = languageId => ({
  type: LANGUAGE_CHANGED,
  payload: {
    languageId,
  },
});
