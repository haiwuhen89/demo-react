/*
 ** gengmangmang
 */

'use strict';

import React from "react";

import HomeContent from './part/HomeContent';
import HomeFeed from './part/HomeFeed';
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
          <div className="index-search">
            <section className="index-search-top-wrapper">
              <form className="index-top-search">
                <div className="input-wrapper">
                  <input className="input" type="search" data-role="input" />
                  <div className="input-other">
                    <button className="submit" type="submit" data-role="submit"></button>
                    <span className="input-placeholder">搜索商家或地点</span>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <section className="index-catg">
            <ul className="catg-wraps">
              <li className="wrap">
                <a className="item item1">
                  <div className="img"></div>
                  <div className="word">美食</div>
                </a>
                <a className="item item2">
                  <div className="img"></div>
                  <div className="word">电影演出</div>
                </a>
                <a className="item item3">
                  <div className="img"></div>
                  <div className="word">酒店</div>
                </a>
                <a className="item item4">
                  <div className="img"></div>
                  <div className="word">KTV</div>
                </a>
                <a className="item item5">
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
        <HomeContent />
        <section className="home-feed-title">
          <h3 className="home-feed-title-text">
            <span className="home-feed-title-icon">
              猜你喜欢
            </span>
          </h3>
        </section>
        <HomeFeed {...this.props} />
        <div className="goods">
          {this.getGoods()}
        </div>
      </div>);
  }
}

export default Home;