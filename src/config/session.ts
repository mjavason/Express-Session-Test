import { SESSION_SECRET } from '../constants';
import session from 'express-session';
const store = new session.MemoryStore();

export default session({
  secret: SESSION_SECRET, // Change this to a strong, unique secret
  resave: false,
  cookie: {maxAge: 1000 * 60  * 60 * 24},
  saveUninitialized: false,
  store
});
