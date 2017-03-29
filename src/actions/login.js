import _ from 'lodash';

export function changePageToLogin() {
  return dispatch => {
    dispatch({
      type: 'changePageToLogin',
      data: 'login'
    }); 
  }
}