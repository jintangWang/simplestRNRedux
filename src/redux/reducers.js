import {combineReducers} from 'redux';

const initialState = {
  text: 'hello'
};

function login(state = initialState, action) {
  switch(action.type) {
    case 'login':
      return {
        ...state,
        text: action.text
      };
    default: 
      return state;
  }
}

function logout(state = initialState, action) {
  switch(action.type) {
    case 'logout':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
}
export default combineReducers({
  login,
  logout
})