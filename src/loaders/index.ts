import * as express from 'express';
import 'reflect-metadata';
import jobsLoader from '../jobs';
import agendaFactory from './agenda';
import database from './database';
import server from './server';

export default async (app: express.Application) => {
  const connection = await database();
  console.log('DB loaded and connected!');

  const agenda = await agendaFactory(connection);
  await jobsLoader(agenda);
  console.log('Jobs loaded');

  console.log(agenda);

  agenda.define('delete old users', (job, done) => {
    console.log(job);
    done();
  });

  (async function() {
    // IIFE to give access to async/await
    await agenda.start();

    await agenda.every('1 minutes', 'delete old users');
  })();

  await server(app);
  console.log('Server loaded!');
};
