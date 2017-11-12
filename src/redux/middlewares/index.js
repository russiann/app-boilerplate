
import reduxThunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { createLogicMiddleware } from 'redux-logic';

import logger from './logger';
import logic from './logic';

export default [
  createLogicMiddleware(logic),
  logger('store', { diff: true }),
  reduxThunk,
  reduxPromiseMiddleware()
];

