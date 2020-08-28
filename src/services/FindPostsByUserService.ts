import User from '../entities/User';
import Post from '../entities/Post';

import UsersRepository from '../repositories/UsersRepository';
import PostsRepository from '../repositories/PostsRepository';

interface PostResponse {
  post: Post;
  user: User;
}

class FindPostsByUserService {
  public async execute(userId: number): Promise<PostResponse[] | undefined> {
    const user = await UsersRepository.findUser(userId);

    if (user) {
      const posts = await PostsRepository.findPosts();

      if (posts) {
        const postsFiltered = posts
          .filter((post: Post): boolean => {
            return user.id === post.userId;
          })
          .map(
            (post: Post): PostResponse => {
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
