import { Router, Request, Response } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/users', route);
};
