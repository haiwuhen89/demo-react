

'use strict';

import React from "react";
import './index.less';

class Login extends React.Component{
     constructor(props){
        super(props)
        console.log('login');       
    }
    render(){
        return (
        	<div className="login">
        		<p className="login-title">登录果仁宝账号付款</p>



        	</div>
        );
    }
}

export default Login;