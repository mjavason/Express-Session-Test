// typings.d.ts

import * as express from 'express';
import * as session from 'express-session';

declare module 'express' {
  interface Request {
    session?: session.Session;
  }
}
