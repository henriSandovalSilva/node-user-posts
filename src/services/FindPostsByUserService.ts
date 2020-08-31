import IUser from '../entities/User';
import IPost from '../entities/Post';

import UsersRepository from '../repositories/UsersRepository';
import PostsRepository from '../repositories/PostsRepository';

interface IPostResponse {
  post: IPost;
  user: IUser;
}

class FindPostsByUserService {
  public async execute(userId: number): Promise<IPostResponse[] | undefined> {
    const user = await UsersRepository.findUser(userId);

    if (user) {
      const posts = await PostsRepository.findPosts();

      if (posts) {
        const postsFiltered = posts
          .filter((post: IPost): boolean => {
            return user.id === post.userId;
          })
          .map(
            (post: IPost): IPostResponse => {
              return {
                post,
                user,
              };
            },
          );

        return postsFiltered;
      }
    }

    return undefined;
  }
}

export default new FindPostsByUserService();
