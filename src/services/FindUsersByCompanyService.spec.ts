import FindUsersByCompanyService from './FindUsersByCompanyService';

describe('FindUsersByCompanyService', () => {
  it('should be able to find a user by company', async () => {
    const users = await FindUsersByCompanyService.execute('Romaguera-Crona');

    if (users !== undefined) {
      expect(users[0].company.name).toBe('Romaguera-Crona');
    }
  });

  it('should not be able to find a posts of invalid user', async () => {
    const users = await FindUsersByCompanyService.execute(
      'CompanyTestNonExistent',
    );

    expect(users).toBe(undefined);
  });
});
