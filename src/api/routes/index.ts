import { Router } from 'express';
import auth from './auth';
import users from './users';

const router = Router();
auth(router);
users(router);

export default router;
