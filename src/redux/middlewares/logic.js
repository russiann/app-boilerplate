import { createLogic } from 'redux-logic';

const addUniqueId = createLogic({
  type: 'SERVICES_COMPANIES_FIND_FULFILLED',
  transform({ getState, action }, next) {
    // add unique tid to action.meta of every action
    console.log('-->', getState());
    next(action);
  }
});
export default [addUniqueId];