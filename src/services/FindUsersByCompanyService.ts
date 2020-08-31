import IUser from '../entities/User';

import UsersRepository from '../repositories/UsersRepository';

class FindUsersByCompanyService {
  public async execute(company: string): Promise<IUser[] | undefined> {
    const users = await UsersRepository.findUsers();

    if (users) {
      const usersFiltered = users.filter(
        (user: IUser): boolean => user.company.name === company,
      );

      return usersFiltered;
    }

    return undefined;
  }
}

export default new FindUsersByCompanyService();
