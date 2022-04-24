const { context } = require("../index.js");

const data = {
  foo: "bar",
  lorem: "ipsum",
};

const ctx = context();
ctx.set("Hello", "world");
ctx.setWithTimeout("Hello2", Promise.resolve("world2")); // avoid memory leaks for promise value
ctx.multiSet(data);

console.log(ctx.get("Hello")); // world
console.log(context().get("Hello")); // world
console.log(ctx.get("Hello2")); // Promise { 'world2' }
console.log(context().get("Hello2")); // Promise { 'world2' }
context().getCallback("Hello", (res) => console.log(res)); // return callback
ctx.getCallback("Hello", (res) => console.log(res));
console.log(ctx.get("foo"));
ctx.getCallback("foo", (res) => console.log(res));
