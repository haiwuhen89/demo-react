import _ from 'lodash';

const initialState = {
  page: '',
};

const actionsMap = {
  changePageToLogin(state, action){
    state.page = action.data;
    return {state}
  },
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};