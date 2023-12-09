import express, { Request, Response } from 'express';
const router = express.Router();
import isAuth from '../../../middleware/is_auth.middleware';
import { SuccessResponse } from '../../../helpers/response.helper';

router.use(isAuth);
router.get('/profile', (req: Request, res: Response) => {
  return SuccessResponse(res, res.locals.user);
});

export default router;
