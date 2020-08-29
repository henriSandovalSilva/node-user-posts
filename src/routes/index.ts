import { Router } from 'express';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({
    description: 'A Typescript API to show user posts',
    status: 'Running',
    version: '1.0.0',
  });
});

routes.use('/users', usersRouter);

export default routes;
