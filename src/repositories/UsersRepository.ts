import axios from 'axios';

import IUser from '../entities/User';

class UsersRepository {
  public async findUser(userId: number): Promise<IUser | undefined> {
    const user = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${userId}`,
    );

    return user.data || undefined;
  }

  public async findUsers(): Promise<IUser[] | undefined> {
    const users = await axios.get('http://jsonplaceholder.typicode.com/users');

    return users.data || undefined;
  }
}

export default new UsersRepository();
