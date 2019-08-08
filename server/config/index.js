/*
 * @Author: Sensuos 
 * @Date: 2019-08-03 16:18:18 
 * @Last Modified by: Sensuos
 * @Last Modified time: 2019-08-03 17:39:13
 */
const defaultConfig = require('./default.config');
const prodConfig = require('./prod.config');
const devConfig = require('./dev.config');

// 环境获取 => 判断是否为生产环境
const isProductionEnvironment = process.env.NODE_ENV === 'production';

module.exports = isProductionEnvironment ? { ...defaultConfig, ...prodConfig } : { ...defaultConfig, ...devConfig };