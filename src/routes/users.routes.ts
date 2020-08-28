import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();

usersRouter.get('/:companyName', UsersController.list);
usersRouter.get('/:userId/posts', UsersController.listUserPosts);

export default usersRouter;
