/**
 * @file 获取数据模块
 */

'use strict';

import $ from 'jquery';

import { host } from './config';

import tool from './tool';


//根据编译的线上线下环境切换url
var requestHost = host[process.env.NODE_ENV]['host']; 

const addMember = (requestData) => {
    ['data', 'params'].forEach((addKey) => {
        var obj = requestData[addKey];
        if (obj && obj.memberId) {
            let memberIdKey = obj.memberId;
            if (typeof memberIdKey === 'boolean') {
                memberIdKey = 'memberId';
            }
            delete obj.memberId;
        }
    });
}

/**
 * 设置默认的content-type为application/json
 * @param  {[type]} requestData [description]
 * @return {[type]}             [description]
 */
const fixContentType = function(requestData) {
    let headers = requestData.headers;
    if (!headers) {
        // requestData.headers = {
        //     'Content-Type': 'application/json'
        // }
        requestData.data = JSON.stringify(requestData.data);
    } else {
        if (!headers['Content-Type']) {
            // headers['Content-Type'] = 'application/json';
            requestData.data = JSON.stringify(requestData.data);
        }
    }
}

/**
 * @method getData
 * @desc 获取数据
 * @param url {String} 请求方法
 * @param opts {Object} 请求额外参数,如header
 * @returns {*}
 */
const getData = (url, opts = { method: 'GET' }) => {
    var deferred = $.Deferred(),
        requestData = $.extend({
            success(response) {
                // 果仁宝请求
                response.status = 200;
                // response = JSON.parse(response);
                if (response.status == 200) {
                    deferred.resolve(response.data || {});
                } else {
                    deferred.reject(response.msg, response);
                }
            },
            cache: false,
            crossDomain: true,
            fail() {
                deferred.reject('请求出错,请稍后重试');
            }
        }, opts);
    fixContentType(requestData);
    url = requestHost + url;
    addMember(requestData);
    if (requestData.params) {
        let params = requestData.params;
        url += url.indexOf('?') > -1 ? '&' : '?';
        url += tool.formatData(params);
    }
    $.ajax(url, requestData);
    return deferred.promise();
};

/**
 * @method postData
 * @desc 提交数据
 * @param url {String} 请求方法
 * @param opts {Object} 请求的额外参数
 * @returns {*}
 */
const postData = (url, opts = {}) => {
    opts.method = 'POST';
    return getData(url, opts);
}

/**
 * @method putData
 * @desc 提交数据
 * @param url {String} 请求方法
 * @param opts {Object} 请求的额外参数
 * @returns {*}
 */
const putData = (url, opts = {}) => {
    opts.method = 'PUT';
    return getData(url, opts);
};

const deleteData = (url, opts = {}) => {
    opts.method = 'DELETE';
    return getData(url, opts)
}

export { getData };
export { postData };
export { putData };
export { deleteData }
