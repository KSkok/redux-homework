import { USER_LOGIN, USER_LOGOUT } from './actions';

const initialState = {
  name: localStorage.getItem('userName'),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { name: action.payload.userName };
    case USER_LOGOUT:
      return { name: null };

    default:
      return state;
  }
};

export default userReducer;