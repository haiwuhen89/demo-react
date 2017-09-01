/*
 ** gengmangmang
 */

'use strict';

import React from "react";
import './index.less';

class Login extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      page :''
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.login && nextProps.login.page) {
      let page = nextProps.login.page;
      console.log(page);
      this.setState({
        page:page
      });
    }
  }

  componentDidMount(){
    setTimeout(()=> {
      this.props.changePageToLogin(); 
    },1000);
  }

  render(){
    return (
      <div className="login">
        <p className="login-title">Page:{this.state.page}</p>
      </div>
    );
  }
}

export default Login;