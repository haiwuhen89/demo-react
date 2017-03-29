import React, { Component, PropTypes } from 'react';
import Login from '../page/Login/Login'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../actions/login';
import _ from 'lodash';



@connect(
  state => ({
    login: state.login,
  }),
  dispatch => bindActionCreators(LoginActions, dispatch)
)
export default class LoginContainer extends Component {

  render() {
    return (
      <Login {...this.props}/>
    );
  } 
}