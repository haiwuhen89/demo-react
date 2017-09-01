/**
 * @file 页面头部组件
 */

'use strict';

import React from 'react';
import { Link, History } from 'react-router';
import BackBtn from '../BackBtn/back-btn';

import { globalConfig } from '../../modules/config';

require('./header.less');

class Header extends React.Component {

	/**
	 * @desc 渲染html结构
	 * @returns {XML}
	 */
	render() {
		let goHome = this.props.goHome ? (
			//TODO:目前是返回旧版首页
			<a href={ globalConfig.v1_HOST+'/plaza' }><i className="go-home iconfont"></i></a>
		):(
			''
		);
		return (
			<header className="header clearfix">
				{ goHome }
				<h1>{ this.props.title }</h1>
				{(() => {
					switch (this.props.canBack) {
						case true: return (
							<BackBtn { ...this.props } />
						);
						default: return '';
					}
				})()}
			</header>
		);
	}
};

/**
 * @desc 默认的参数
 * @param title {String} 头部的title
 * @param canBack {Boolean} 是否存在返回按钮
 * @param goHome {Boolean} 是否存在返回首页按钮
 * @param link {String} 返回按钮跳转的链接 默认是返回上一步
 * @type {{title: string, canBack: boolean, link: string}}
 */
Header.defaultProps = {
	title: '',
	canBack: true,
	goHome: true,
	link: ''
};

export default Header;