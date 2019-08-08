/*
 * @Author: Sensuos 
 * @Date: 2019-08-03 16:10:52 
 * @Last Modified by: Sensuos
 * @Last Modified time: 2019-08-03 17:37:41
 */

const config = require('../config/default.config');
const mysql = require('mysql');

// 创建连接池
const pool = mysql.createPool(config.mysql);

// 导出 sql 查询
module.exports = (sql, values) => new Promise((reslove, reject) => {
  pool.getConnection((err, connection) => {
    // 有错误 => 抛出错误
    if (err) reject(err);
    else {
      connection.query(sql, values, (err, result) => {
        // 有错误 => 抛出错误
        if (err) reject(err);
        else {
          resolve(result);
        }

        // 操作完成, 释放连接.
        connection.release();
      })
    }
  })
})
