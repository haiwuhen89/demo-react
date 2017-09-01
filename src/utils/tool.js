/**
 * @file 工具模块
 */

'use strict';

export default {
	/**
	 * @desc 将json转为表单提交格式
	 * @param data
	 * @returns {string}
	 */
	formatData (data) {
		var str = [];
		for(var k in data) {
			str.push(k + '=' + data[k]);
		}
		return str.join('&');
	},

}