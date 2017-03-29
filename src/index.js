import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const app =(
  <Provider store={store}>
    {routes}
  </Provider>
);

// import 'icono';
// import 'app';
require('./app.less');
// require('./icono.less');


ReactDOM.render(app, document.getElementById('app'));