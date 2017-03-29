/* eslint global-require: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState,enhancer );
  if (module.hot) {
    module.hot.accept('./reducers',() => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
}