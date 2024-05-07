import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import { expensesRoute } from "./routes/expenses";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").route("/expenses", expensesRoute);

app.use("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
export type ApiRoutes = typeof apiRoutes;
