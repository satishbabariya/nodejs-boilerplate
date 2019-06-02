import config from '../config';
// import EmailSequenceJob from '../jobs/emailSequence';

export default agenda => {
  agenda.define(
    'send-email',
    { priority: 'high', concurrency: config.agenda.concurrency },
    // new EmailSequenceJob().handler,
  );

  agenda.start();
};
