import Agenda from 'agenda';
import { Connection } from 'typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import config from '../config';

export default async (connection: Connection) => {
  return new Agenda({
    db: {
      address: buildConnectionUrl(connection.options as MongoConnectionOptions),
    },
    collection: config.agenda.dbCollection,
    processEvery: config.agenda.pooltime,
    maxConcurrency: config.agenda.concurrency,
  }) as any;

  // const mongodb = (connection.driver as any).mongodb;

  // return new Agenda({
  //   db: mongodb.MongoClient.db,
  //   collection: config.agenda.dbCollection,
  //   processEvery: config.agenda.pooltime,
  //   maxConcurrency: config.agenda.concurrency,
  // }) as any;
};

function buildConnectionUrl(options: MongoConnectionOptions): string {
  if (options.url) {
    return options.url;
  }
  const credentialsUrlPart =
    options.username && options.password ? `${options.username}:${options.password}@` : '';
  return `mongodb://${credentialsUrlPart}${options.host || '127.0.0.1'}:${options.port ||
    '27017'}/${options.database}`;
}
