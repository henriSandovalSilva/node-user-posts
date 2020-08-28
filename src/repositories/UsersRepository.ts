import axios from 'axios';

import User from '../entities/User';

class UsersRepository {
  public async findUser(userId: number): Promise<User | undefined> {
    const user = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${userId}`,
    );

    return user.data || undefined;
  }

  public async findUsers(): Promise<User[] | undefined> {
    const users = await axios.get('http://jsonplaceholder.typicode.com/users');

    return users.data || undefined;
  }
}

export default new UsersRepository();
