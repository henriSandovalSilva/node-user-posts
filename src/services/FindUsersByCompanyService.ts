import User from '../entities/User';

import UsersRepository from '../repositories/UsersRepository';

class FindUsersByCompanyService {
  public async execute(company: string): Promise<User[] | undefined> {
    const users = await UsersRepository.findUsers();

    if (users) {
      const usersFiltered = users.filter(
        (user: User): boolean => user.company.name === company,
      );

      return usersFiltered;
    }

    return undefined;
  }
}

export default new FindUsersByCompanyService();
