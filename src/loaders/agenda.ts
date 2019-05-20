// import * as Agenda from 'agenda';
// import { createConnection, Connection, getConnectionOptions } from 'typeorm';
// import config from '../config';

// export default async ({ connection }) => {
//   const agenda = new Agenda();

//   await agenda._ready;

//   agenda
//     .mongo(connection, config.agenda.dbCollection)
//     .processEvery(config.agenda.pooltime)
//     .maxConcurrency(config.agenda.concurrency);

//   return agenda;
// };
