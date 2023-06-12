import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./src/routes/routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server is up and running on port 5000");

await app.listen({ port: 5000 });