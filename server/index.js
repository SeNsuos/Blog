/*
 * @Author: Sensuos 
 * @Date: 2019-08-03 16:34:43 
 * @Last Modified by: Sensuos
 * @Last Modified time: 2019-08-04 14:34:37
 */

const Next = require('next');
const Koa = require('koa');
const bodyParser = require('koa-body');
const config = require('./config');
const routers = require('./router');
const mysql = require('./mysql');
const logger = require('./middleware/requestLooger');

// 判断当前环境是否为生产环境
const isProduction = process.env.NODE_ENV === 'production';
const app = Next({ dev: !isProduction });
const handle = app.getRequestHandler();
const { port } = config;

app.prepare()
    .then(() => {
      const server = new Koa();
      server.keys = ['啦啦啦'];
      server.use(bodyParser())
      .use(logger)
      .use(async (ctx, next) => {
        ctx.mysql = mysql;
        await next();
      });

      routers.map(item => server.use(item.routes()));

      // 静态资源
      server.use( async ctx => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
      })
      .use(async (ctx, next) => {
        ctx.res.statusCode = 200;
        await next();
      })
      .listen(port, (err) => {
        // 如果启动失败, 抛出错误
        if (err) throw err;
        console.info(`Server started on http://localhost:${port}!`);
      })
    })