import React, { Component, PropTypes } from 'react';
import Home from '../page/Home/Home'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions/home';
import _ from 'lodash';



@connect(
  state => ({
    home: state.home,
  }),
  dispatch => bindActionCreators(HomeActions, dispatch)
)
export default class HomeContainer extends Component {

  render() {
    return (
      <Home {...this.props}/>
    );
  } 
}