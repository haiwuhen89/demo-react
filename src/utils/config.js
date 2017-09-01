/**
 * @file 配置
 */

//开发环境的host
export const devHost = 'https://m.nuomi.com/';

//sit的host
export const sitHost = 'http://gopendpoint.treespaper.com/';

//sandbox的host
export const sandboxHost = 'http://gopendpoint.sandbox.treespaper.com/';

//线上的host
export const onlineHost = 'https://endpoint.guorenbao.com/';

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