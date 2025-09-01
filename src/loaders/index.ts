import express from 'express';
import 'reflect-metadata';
import database from './database';
import server from './server';

export default async (app: express.Application) => {
  await database();
  console.warn('DB loaded and connected!');

  await server(app);
  console.warn('Server loaded!');
};
