/**
 * @file 配置
 */

//开发环境的host
export const devHost = ''; //dev 环境 url 换使用方式，为了跨域

//sit的host
export const sitHost = 'http://gopendpoint.treespaper.com/';

//sandbox的host
export const sandboxHost = 'http://gopendpoint.sandbox.treespaper.com/';

//线上的host
export const onlineHost = 'https://m.nuomi.com/';

export const host = {
	'prod': {
		host: onlineHost,
	},
	'sandbox': {
		host: sandboxHost,
	},
	'sit': {
		host: sitHost,
	},
	'dev': {
		host: devHost,
	}
};