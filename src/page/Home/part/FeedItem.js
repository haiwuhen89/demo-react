/*
 ** gengmangmang
 */

'use strict';

import React from "react";

import './FeedItem.less';


class FeedItem extends React.Component{
  constructor(props){
    super(props);
    
  }

  componentWillReceiveProps(nextProps){

  }

  componentDidMount(){

  }

  render(){
    let info = this.props.info;
    console.log(info.images[0]);
    let image1 = info.images[0];
    let image2 = info.images[1];
    let image3 = info.images[2];

    return  (
      <div className="feed-item">   
        <a href={info.wap_url}>
          <div className="title">{info.title}</div>   
          <div className="address">{info.area}</div>            
          <div className="imgs">
            <div className="imgs-item">
              <div className="img" style={{backgroundImage:'url('+image1+')'}}></div>
            </div>
            <div className="imgs-item">
              <div className="img" style={{backgroundImage:'url('+image2+')'}}></div>
            </div>
            <div className="imgs-item">
              <div className="img" style={{backgroundImage:'url('+image3+')'}}></div>
            </div>
          </div>
        </a>
      </div>);
  }
}

export default FeedItem;