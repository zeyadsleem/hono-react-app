import app from "./app";

Bun.serve({
  fetch: app.fetch,
});

console.log("serve is running");
