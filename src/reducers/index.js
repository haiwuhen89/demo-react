import { combineReducers } from 'redux';
import home from './home';
import login from './login';

export default combineReducers({
  home,
  login
});