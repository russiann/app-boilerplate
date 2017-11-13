
import reduxThunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { createLogicMiddleware } from 'redux-logic';

import logger from './logger';
import logic from './logic';

/**
|--------------------------------------------------
| Scenes Logic Middlewares
|--------------------------------------------------
*/

import { companiesCreateLogic } from '../../scenes/Companies/create';

const logicMiddlewares = [
  ...companiesCreateLogic,
  ...logic,
];


export default [
  createLogicMiddleware(logicMiddlewares),
  // logger('store', { diff: true }),
  reduxThunk,
  reduxPromiseMiddleware()
];

