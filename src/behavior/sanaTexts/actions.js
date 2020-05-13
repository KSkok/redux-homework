export const SANA_TEXTS_RECEIVED = 'SANA_TEXTS_RECEIVED';
export const receiveSanaTexts = texts => ({
  type: SANA_TEXTS_RECEIVED,
  payload: {
    texts,
  },
});

export const CHANGE_SANA_TEXT = 'CHANGE_SANA_TEXT';
export const changeSanaText = text => ({
  type: CHANGE_SANA_TEXT,
  payload: {
    text,
  },
});