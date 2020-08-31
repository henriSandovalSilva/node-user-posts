import FindPostsByUserService from './FindPostsByUserService';

describe('FindPostsByUser', () => {
  it('should be able to find a user posts', async () => {
    const posts = await FindPostsByUserService.execute(1);

    if (posts !== undefined) {
      expect(posts[0].post.userId).toBe(1);
    }
  });

  it('should not be able to find a posts of invalid user', async () => {
    const posts = await FindPostsByUserService.execute(999999);

    expect(posts).toBe(undefined);
  });
});
