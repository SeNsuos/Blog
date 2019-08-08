/*
 * @Author: Sensuos 
 * @Date: 2019-08-03 16:18:49 
 * @Last Modified by: Sensuos
 * @Last Modified time: 2019-08-03 17:38:35
 * @desc 生产环境配置
 */

module.exports = {
  // 域名
  domain: 'http://localhost',
  // 端口号
  port: 3000,
  // api 缓存
  apiCache: {
    maxAge: 1000 * 3,
    isOpen: false
  },
  // 页面缓存
  openUrlCache: false,
  urlCache: {
    max: 20,
    maxAge: 1000 * 60 * 60
  },
}