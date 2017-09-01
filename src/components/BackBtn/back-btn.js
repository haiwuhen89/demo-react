/**
 * @file 返回按钮
 */

'use strict';

import React from 'react';
// import {PropTypes} from 'react-router';


/**
 * @class 返回按钮
 */
class BackBtn extends React.Component {

	/**
	 * @method goBack
	 * @desc 返回上一步
	 */
	goBack() {
		this.props.history.goBack();
	}

	/**
	 * @method goTo
	 * @desc 返回指定的link
	 */
	goTo() {
		this.props.history.pushState(null, this.props.link);
	}

	/**
	 * @desc 渲染方法
	 * @returns {XML}
	 */
	render() {
		console.log(this)
		let onClick = this.props.goBack ? this.goBack.bind(this) : this.goTo.bind(this);
		return (
			<a className="back-btn"  onClick={ onClick } >
				<i className="iconfont icon-back"></i>
			</a>
		);
	}
}

/**
 * @desc context
 * @type {{history: *}}
 */
BackBtn.contextTypes = {
	// history: PropTypes.history
}

/**
 * @desc props
 * @type {{link: string, canBack: boolean}}
 */
BackBtn.defaultProps = {
	link: '',
	goBack: true
}

export default BackBtn;