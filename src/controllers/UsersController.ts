import { Request, Response } from 'express';

import FindUsersByCompanyService from '../services/FindUsersByCompanyService';
import FindPostsByUserService from '../services/FindPostsByUserService';

class UsersController {
  public async list(request: Request, response: Response) {
    const users = await FindUsersByCompanyService.execute(
      request.params.companyName,
    );

    response.json(users);
  }

  public async listUserPosts(request: Request, response: Response) {
    const users = await FindPostsByUserService.execute(
      parseInt(
        request.params.userId.substring(request.params.userId.length - 1),
        10,
      ),
    );

    response.json(users);
  }
}

export default new UsersController();
