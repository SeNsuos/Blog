/*
 * @Author: Sensuos 
 * @Date: 2019-08-03 16:20:49 
 * @Last Modified by: Sensuos
 * @Last Modified time: 2019-08-03 17:39:21
 * @desc 生产环境配置
 */

module.exports = {
  // 域名
  domain: 'sensuos.top',
  // 端口
  port: 3000,
  // api 缓存配置
  apiCache: {
    maxAge: 1000 * 3,
    isOpen: true,
  },
  // 页面缓存
  openUrlCache: true,
  urlCache: {
    max: 20,
    maxAge: 1000 * 60 * 60
  },
}