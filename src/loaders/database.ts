import { createConnection, Connection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  // read connection options from ormconfig file (or ENV variables)
  const connectionOptions = await getConnectionOptions();

  // do something with connectionOptions,

  // create a connection using modified connection options
  const connection = await createConnection(connectionOptions);
  return connection;
};
