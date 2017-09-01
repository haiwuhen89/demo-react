/**
 * @file 页面头部组件
 */

'use strict';

import React from 'react';
import BackBtn from '../BackBtn/back-btn';

// import { globalConfig } from '../../modules/config';

// require('./header.less');

class Header extends React.Component {

	/**
	 * @desc 渲染html结构
	 * @returns {XML}
	 */
	render() {
		return (
			<div className="header clearfix">
				<h1>{this.props.title}</h1>
				{(() => {
					switch (this.props.canBack) {
						case true: return (
							<BackBtn { ...this.props } />
						);
						default: return '';
					}
				})()}
			</div>
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