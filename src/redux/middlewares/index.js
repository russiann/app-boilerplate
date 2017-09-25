
import reduxThunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import logger from './logger';

export default [
  logger('store', { diff: true }),
  reduxThunk,
  reduxPromiseMiddleware()
];

