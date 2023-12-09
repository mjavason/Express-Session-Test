import { NextFunction, Request, Response } from 'express';
import { AccessTokenErrorResponse } from '../helpers/response.helper';

const isAuth = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const decoded = req.session.user;
  console.log('Session id', req.session);

  if (!decoded)
    return AccessTokenErrorResponse(res, 'Unauthorized! Please login');

  //verify user actually exists
  // const validUser = await demoService.getUserInfo(res.locals.user);

  console.log(decoded);
  res.locals.user = decoded;
  return next();
};

export default isAuth;
