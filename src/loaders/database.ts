import Container from 'typedi';
import { Connection, createConnection, useContainer } from 'typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import config from '../config';
import { User } from '../models/User';

export default async (): Promise<Connection> => {
  // read connection options from ormconfig file (or ENV variables)
  // const connectionOptions = await getConnectionOptions();
  const connectionOptions: MongoConnectionOptions = {
    type: 'mongodb',
    host: config.database.host,
    port: config.database.port,
    database: config.database.database,
    synchronize: false,
    logging: true,
    // useNewUrlParser: true,
    entities: [User],
  };

  // typedi + typeorm
  useContainer(Container);

  // create a connection using modified connection options
  const connection = await createConnection(connectionOptions);

  return connection;
};
