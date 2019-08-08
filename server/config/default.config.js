/*
 * @Author: Sensuos 
 * @Date: 2019-08-03 15:47:47 
 * @Last Modified by: Sensuos
 * @Last Modified time: 2019-08-03 17:38:29
 * @desc 默认配置
 */
module.exports = {
  // 数据库配置
  mysql: {
    host: 'sensuos.top',
    user: 'root',
    password: 'tpf981125',
    database: 'blog',
    HOST: 'localhost'
  },

  // 日志文件
  logger: {
    appenders: {
      console: {
        type: 'console',
      },
      trace: {
        type: 'dateFile',
        filename: './logs/access-',
        pattern: '.yyyy-MM-dd.log',
        alwaysIncludePattern: true,
        maxLogSize: 31457280,
      },
      http: {
        type: 'logLevelFilter',
        appender: 'trace',
        level: 'trace',
        maxLevel: 'trace',
      },
      info: {
        type: 'dateFile',
        filename: './logs/info-',
        encoding: 'utf-8',
        pattern: '.yyyy-MM-dd.log',
        maxLogSize: 10000000,
        alwaysIncludePattern: true,
        layout: {
          type: 'pattern',
          pattern: '[%d{ISO8601}][%5p  %z  %c] %m',
        },
        compress: true,
      },
      maxInfo: {
        type: 'logLevelFilter',
        appender: 'info',
        level: 'debug',
        maxLevel: 'error',
      },
      error: {
        type: 'dateFile',
        filename: './logs/error-',
        pattern: '.yyyy-MM-dd.log',
        maxLogSize: 10000000,
        encoding: 'utf-8',
        alwaysIncludePattern: true,
        layout: {
          type: 'pattern',
          pattern: '[%d{ISO8601}][%5p  %z  %c] %m',
        },
        compress: true,
      },
      minError: {
        type: 'logLevelFilter',
        appender: 'error',
        level: 'error',
      },
    },
    categories: {
      default: {
        appenders: [
          'console',
          'http',
          'maxInfo',
          'minError',
        ],
        level: 'all',
      },
    },
  },
}