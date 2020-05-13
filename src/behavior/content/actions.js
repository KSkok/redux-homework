export const ADD_TEXT = 'ADD_TEXT';
export const addText = text => ({
  type: ADD_TEXT,
  payload: {
    text,
  },
});

export const CHANGE_TEXT = 'CHANGE_TEXT';
export const changeText = text => ({
  type: CHANGE_TEXT,
  payload: {
    text,
  },
});