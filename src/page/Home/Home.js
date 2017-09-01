/*
 ** gengmangmang
 */

'use strict';

import React from "react";

import './home.less';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    	isLogin:'',
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.home && nextProps.home.isLogin) {
    	let isLogin = nextProps.home.isLogin
    	this.setState({
    		isLogin:isLogin
    	});
    }
  }

  componentDidMount(){
    this.props.homeAjax();
  	setTimeout(()=> {
    	this.props.changePage(); 
  	},3000);
  }

  getCatgs(){
    let data = this.props.home.homeAjax;
    let array;
    if (data && data.hotword && data.hotword.list) {
      let list = data.hotword.list;
      array = list.map(function(val,key) {
        return <div key={val} className="hotword-item">{val}</div>;        
      });
    }
    return array;
  }

  getGoods(){
    let data = this.props.home.homeAjax;
    let array;
    if (data && data.goods && data.goods.lists) {
      let list = data.goods.lists;
      array = list.map(function(val,key){
        return <div key={val.brand_name}>{val.brand_name}</div>;
      });
    }
    return array;
  }

  render(){
    return  (
      <div className="home">
        <div className="home-type">
          <section className="index-catg">
            <ul className="catg-wraps">
              <li className="wrap">
                <a className="item">
                  <div className="img"></div>
                  <div className="word">美食</div>
                </a>
                <a className="item">
                  <div className="img"></div>
                  <div className="word">电影演出</div>
                </a>
                <a className="item">
                  <div className="img"></div>
                  <div className="word">酒店</div>
                </a>
                <a className="item">
                  <div className="img"></div>
                  <div className="word">KTV</div>
                </a>
                <a className="item">
                  <div className="img"></div>
                  <div className="word">外卖</div>
                </a>
                <a className="item">
                  <div className="img"></div>
                  <div className="word">休闲娱乐</div>
                </a>
                <a className="item">
                  <div className="img"></div>
                  <div className="word">火锅</div>
                </a>
                <a className="item">
                  <div className="img"></div>
                  <div className="word">充值中心</div>
                </a>
                <a className="item">
                  <div className="img"></div>
                  <div className="word">周边游</div>
                </a>
                <a className="item">
                  <div className="img"></div>
                  <div className="word">代金券</div>
                </a>

              </li>
            </ul>
          </section>
        </div>
        <div className="goods">
          {this.getGoods()}
        </div>
      </div>);
  }
}

export default Home;