import { combineReducers } from 'redux';

import { homeReducer } from '../scenes/Home';
import { drawerReducer } from '../scenes/Drawer';

import { reducers } from '../feathers';

export default combineReducers({
  home:	homeReducer,
  drawer: drawerReducer,
  ...reducers
});