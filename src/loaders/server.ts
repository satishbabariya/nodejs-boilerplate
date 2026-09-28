import bodyParser from 'body-parser';
import { errors, isCelebrateError } from 'celebrate';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import routes from '../api/routes';

export default (app: express.Application) => {
  app.enable('trust proxy');
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(errors());

  app.use('/api', routes);

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const error: any = new Error('Not Found');
    error.status = 404;
    next(error);
  });

  /// error handlers
  app.use((err: any, req: any, res: any, next: any) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }

    /**
     * Handle validation error thrown by Celebrate + Joi
     */
    if (isCelebrateError(err)) {
      return res.status(422).send({ message: err.message, details: err.details }).end();
    }
    return next(err);
  });

  app.use((err: any, req: any, res: any, _next: any) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
