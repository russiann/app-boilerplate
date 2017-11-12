import { combineReducers } from 'redux';

import { homeReducer } from '../scenes/Home';

import { reducers } from '../feathers';

export default combineReducers({
  home:	homeReducer,
  ...reducers
});