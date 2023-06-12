import { Router } from "https://deno.land/x/oak/mod.ts";
import * as controller from '../controllers/controllers.ts';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = 'Hello, World!';
});

router.get('/users', controller.getUsers)
  .get('/users/:id', controller.getUserById)
  .post('/users', controller.addUser)
  .put('/users/:id', controller.updateUser)
  .delete('/users/:id', controller.deleteUser);

export default router;