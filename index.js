"use strict";
const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  ctx.body = "Hello World , this is my first koa app";
});

app.listen(4000);
