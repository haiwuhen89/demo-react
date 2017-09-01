import _ from 'lodash';
import { getData, postData, putData, deleteData } from '../utils/Http';

export function changePage() {
  return dispatch => {
    dispatch({
      type: 'changePage',
      data: 'home'
    }); 
  }
}

export function homeAjax(param){
	return dispatch =>{
		getData('webapp/tuan/homeAjax',param).then(function(data){
			dispatch({
				type:'homeAjax',
				data:data,
			});
		});
	}
}
