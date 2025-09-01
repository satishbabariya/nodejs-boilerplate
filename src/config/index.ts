import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // Throw generic error
  throw new Error("Couldn't find .env file");
}

export default {
  /**
   *  Application port.
   */
  port: parseInt(process.env.PORT || '3000'),

  /**
   * JWT Secret
   */
  jwtSecret: process.env.JWT_SECRET || 'default-secret-key',

  /**
   * MongoDB connection options.
   */
  database: {
    type: process.env.TYPEORM_CONNECTION,
    /**
     * Connection url where perform connection to.
     */
    url: process.env.TYPEORM_HOST,
    /**
     * Database host.
     */
    host: process.env.TYPEORM_HOST,
    /**
     * Database host port.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    port: Number.parseInt(process.env.TYPEORM_PORT!),
    /**
     * Database username.
     */
    username: process.env.TYPEORM_USERNAME,
    /**
     * Database password.
     */
    password: process.env.TYPEORM_PASSWORD,
    /**
     * Database name to connect to.
     */
    database: process.env.TYPEORM_DATABASE,
  },

  agenda: {
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: process.env.AGENDA_CONCURRENCY,
  },
};
