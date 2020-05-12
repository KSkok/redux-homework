export const SANA_TEXTS_RECEIVED = 'SANA_TEXTS_RECEIVED';
export const receiveSanaTexts = texts => ({
  type: SANA_TEXTS_RECEIVED,
  payload: {
    texts,
  },
});
