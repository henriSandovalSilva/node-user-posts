import axios from 'axios';

import IUser from '../entities/User';

class UsersRepository {
  public async findUser(userId: number): Promise<IUser | undefined> {
    try {
      const user = await axios.get(
        `http://jsonplaceholder.typicode.com/users/${userId}`,
      );

      return user.data || undefined;
    } catch (e) {
      return undefined;
    }
  }

  public async findUsers(): Promise<IUser[] | undefined> {
    try {
      const users = await axios.get(
        'http://jsonplaceholder.typicode.com/users',
      );

      return users.data || undefined;
    } catch (e) {
      return undefined;
    }
  }
}

export default new UsersRepository();
