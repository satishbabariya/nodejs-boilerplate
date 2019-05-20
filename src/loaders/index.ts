import database from './database';
import server from './server';
import * as express from 'express';

export default async (app: express.Application) => {
  const dbConnection = await database();
  console.log('DB loaded and connected!');

  await server(app);
  console.log('Server loaded!');
};
