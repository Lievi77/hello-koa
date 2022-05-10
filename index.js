"use strict";

//Koa does not come with any middleware
//Need to import additional packages for richer functionality

const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("hello-koa", "/", (ctx) => {
  ctx.body = "Hello Koa";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000);
