import { Request, Response } from 'express';

import FindUsersByCompanyService from '../services/FindUsersByCompanyService';
import FindPostsByUserService from '../services/FindPostsByUserService';

class UsersController {
  public async list(request: Request, response: Response) {
    const users = await FindUsersByCompanyService.execute(
      request.params.companyName,
    );

    if (users) {
      response.json(users);
    }

    response.status(404).json({});
  }

  public async listUserPosts(request: Request, response: Response) {
    const usersPosts = await FindPostsByUserService.execute(
      parseInt(request.params.userId.toString(), 10),
    );

    if (usersPosts) {
      response.json(usersPosts);
    }

    response.status(404).json({});
  }
}

export default new UsersController();
