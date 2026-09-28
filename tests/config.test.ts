describe('config', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('throws on startup when JWT_SECRET is not set', () => {
    delete process.env.JWT_SECRET;

    expect(() => require('../src/config')).toThrow(/JWT_SECRET/);
  });

  it('does not throw when JWT_SECRET is set directly in the environment (no .env file needed)', () => {
    delete process.env.JWT_SECRET;
    process.env.JWT_SECRET = 'a-real-secret-from-the-environment';

    expect(() => require('../src/config')).not.toThrow();
  });

  it('exposes the configured JWT secret with no hardcoded fallback', () => {
    process.env.JWT_SECRET = 'a-real-secret-from-the-environment';

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config = require('../src/config').default;

    expect(config.jwtSecret).toBe('a-real-secret-from-the-environment');
  });
});
