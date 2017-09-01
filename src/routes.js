/**
 * @file 路由模块
 */

'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect,hashHistory,browserHistory } from 'react-router';

// hash router
import createHashHistory from 'history/lib/createHashHistory';
// html5 router 
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Common from './page/Common/Common';


import Login from './containers/login.js';
// import Home from './page/Home/Home.js';
import Home from './containers/home.js';

//history的配置
const historyOptions = {
	queryKey : false
};

const routes = (
	<Router history={browserHistory}>
		<Route path='/' onEnter={()=>{}}>
			<Route component={ Common }>
				<IndexRoute component={Login} />
				<Route path="login" component={Login} />
				<Route path="home" component={Home} />
				<Route path="*" component={ Login }/>
			</Route>
		</Route>
	</Router>
);

export default routes;
