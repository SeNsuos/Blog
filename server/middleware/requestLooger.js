/*
 * @Author: Sensuos 
 * @Date: 2019-08-03 16:26:07 
 * @Last Modified by: Sensuos
 * @Last Modified time: 2019-08-03 17:38:17
 * @desc 请求日志打印中间件
 */

const log4js = require('log4js');
const defaultConfig = require('../config/default.config');

const { logger: loggerConfig } = defaultConfig;

module.exports = async (ctx, next) => {
  // 挂载 logger 
  ctx.logger = log4js.getLogger();
  const data = await next();

  return data;
}