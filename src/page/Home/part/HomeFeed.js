/*
 ** gengmangmang
 */

'use strict';

import React from "react";

import FeedItem from './FeedItem';
import './HomeFeed.less';


class HomeFeed extends React.Component{
  constructor(props){
    super(props);
    
  }

  componentWillReceiveProps(nextProps){

  }

  componentDidMount(){

  }

  _getList=(list)=>{
    console.log(list);
    let options = list.map(function(value,key) {
      console.log(value);
      console.log(key);
      return <FeedItem key={key} info={value}></FeedItem>;
    });
    console.log(options);
    return options;
  }

  render(){
    console.log(this.props);
    let feedList = this.props.home&&this.props.home.homeAjax&&this.props.home.homeAjax.feed&&this.props.home.homeAjax.feed.feed_list;
    return  (
      <div>                  
        <section className="home-feed">
          {feedList?this._getList(feedList):false}
        </section>
      </div>);
  }
}

export default HomeFeed;