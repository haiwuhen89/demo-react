import _ from 'lodash';

const initialState = {
  isLogin: false,
};

const actionsMap = {
  changePage(state, action){
    state.isLogin = action.data;
    return { ...state}
  },
  homeAjax(state, action){
  	state.homeAjax = action.data;
  	return { ...state}
  }
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};