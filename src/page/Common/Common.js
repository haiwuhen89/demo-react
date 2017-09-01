/**
 * 放一些页面的公共部分，比如loading、alert
 * gengmangmang
 */

'use strict';

import React from 'react';
// import Alert from '../../components/Alert/alert';
// import Loading from '../../components/Loading/loading';
import Header from '../../components/NuoMiHeader/nuoMiHeader';
import $ from 'jquery';
import './index.less';


class Common extends React.Component {

	/**
	 * @desc 构造函数
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			
		}


	} 

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	_getHeaderFlagByPath(){
		return false;
	}

	render() {
		const props = this.props;
		let headerFlag = this._getHeaderFlagByPath();
		return (
			<div className='page'>
				{headerFlag?<div className='page-header'>
					<Header {...this.props} />
				</div>:false}
				{ props.children }
			</div>
		);
	}
};


export default Common;