import * as express from 'express';
import config from './config';
import loaders from './loaders';

async function main() {
  const app = express.default();
  await loaders(app);

  app.listen(config.port, (err: any) => {
    if (err) {
      console.log(err);
      process.exit(1);
      return;
    }
    console.log(`Server listening on port: ${config.port}`);
  });
}

main();
