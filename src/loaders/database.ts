import { createConnection, Connection, getConnectionOptions } from 'typeorm';
import { User } from '../models/User';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import config from '../config';

export default async (): Promise<Connection> => {
  // read connection options from ormconfig file (or ENV variables)
  // const connectionOptions = await getConnectionOptions();
  const connectionOptions: MongoConnectionOptions = {
    type: 'mongodb',
    host: config.database.host,
    port: config.database.port,
    database: config.database.database,
    synchronize: true,
    logging: true,
    useNewUrlParser: true,
    entities: [User],
  };

  // do something with connectionOptions,

  // create a connection using modified connection options
  const connection = await createConnection(connectionOptions);
  return connection;
};
