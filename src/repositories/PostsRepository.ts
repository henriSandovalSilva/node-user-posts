import axios from 'axios';

import Post from '../entities/Post';

class PostsRepository {
  public async findPosts(): Promise<Post[] | undefined> {
    const posts = await axios.get('http://jsonplaceholder.typicode.com/posts');

    return posts.data || undefined;
  }
}

export default new PostsRepository();
