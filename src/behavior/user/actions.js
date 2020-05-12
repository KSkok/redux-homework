export const USER_LOGIN = 'USER_LOGIN';
export const login = userName => ({
  type: USER_LOGIN,
  payload: {
    userName,
  },
});

export const USER_LOGOUT = 'USER_LOGOUT';
export const logout = () => ({ type: USER_LOGOUT });
