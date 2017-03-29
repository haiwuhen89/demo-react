import _ from 'lodash';

export function changePage() {
  return dispatch => {
    dispatch({
      type: 'changePage',
      data: 'home'
    }); 
  }
}
