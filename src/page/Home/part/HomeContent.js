/*
 ** gengmangmang
 */

'use strict';

import React from "react";

import './HomeContent.less';


class HomeContent extends React.Component{
  constructor(props){
    super(props);
    
  }

  componentWillReceiveProps(nextProps){

  }

  componentDidMount(){

  }

  render(){
    return  (
      <div className="home-content">                  
        <section className="activities">
          <ul className="activity-wrap">
            <li className="activity">
              <div className="activity-mask"></div>
              <a href="https://mdianying.baidu.com/edison/activity/page/214378363287?sub_channel=cloud_nuomi_doufukuai_wap_high&kehuduan=&sfrom=wise_shoubai&from=webapp&source=&c=131&cc=">
                <div className="content">
                  <p className="title">精选排行</p>
                  <p className="sub-title">本地排行榜</p>
                </div>
                <img src="https://gss0.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/nuomi/pic/item/d788d43f8794a4c21a138d0f05f41bd5ad6e39e5.jpg" className="img" />
              </a>
            </li>
            <li className="activity">
              <div className="activity-mask"></div>
              <a href="https://mdianying.baidu.com/edison/activity/page/214378363287?sub_channel=cloud_nuomi_doufukuai_wap_high&kehuduan=&sfrom=wise_shoubai&from=webapp&source=&c=131&cc=">
                <div className="content">
                  <p className="title">免费试用</p>
                  <p className="sub-title">0元抢大牌</p>
                </div>
                <img src="https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/42a98226cffc1e170976ca154190f603728de9cd.jpg" className="img" />
              </a>
            </li>
            <li className="activity">
              <div className="activity-mask"></div>
              <a href="https://mdianying.baidu.com/edison/activity/page/214378363287?sub_channel=cloud_nuomi_doufukuai_wap_high&kehuduan=&sfrom=wise_shoubai&from=webapp&source=&c=131&cc=">
                <div className="content">
                  <p className="title">天天特惠</p>
                  <p className="sub-title">狂享折上折</p>
                </div>
                <img src="https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/dbb44aed2e738bd4c6f515e2ab8b87d6267ff909.jpg" className="img" />
              </a>
            </li>
            <li className="activity">
              <div className="activity-mask"></div>
              <a href="https://mdianying.baidu.com/edison/activity/page/214378363287?sub_channel=cloud_nuomi_doufukuai_wap_high&kehuduan=&sfrom=wise_shoubai&from=webapp&source=&c=131&cc=">
                <div className="content">
                  <p className="title">大片热映</p>
                  <p className="sub-title">惠看电影</p>
                </div>
                <img src="https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/738b4710b912c8fc9b25a5e9f7039245d688213b.jpg" className="img" />
              </a>
            </li>
            <li className="activity">
              <div className="activity-mask"></div>
              <a href="https://mdianying.baidu.com/edison/activity/page/214378363287?sub_channel=cloud_nuomi_doufukuai_wap_high&kehuduan=&sfrom=wise_shoubai&from=webapp&source=&c=131&cc=">
                <div className="content">
                  <p className="title">疯狂砍价</p>
                  <p className="sub-title">大闸蟹减七百</p>
                </div>
                <img src="https://ss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/d31b0ef41bd5ad6e5c761bce8acb39dbb6fd3c02.jpg" className="img" />
              </a>
            </li>
            <li className="activity">
              <div className="activity-mask"></div>
              <a href="https://mdianying.baidu.com/edison/activity/page/214378363287?sub_channel=cloud_nuomi_doufukuai_wap_high&kehuduan=&sfrom=wise_shoubai&from=webapp&source=&c=131&cc=">
                <div className="content">
                  <p className="title">领券中心</p>
                  <p className="sub-title">神券限量领</p>
                </div>
                <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/cc11728b4710b912fa2348dac8fdfc0392452237.jpg" className="img" />
              </a>
            </li>
          </ul>
        </section>
      </div>);
  }
}

export default HomeContent;