import logdown from 'logdown';

const reduxLogdown = (name, opts = {}) => {
  const logger = logdown(name)
  const prevLogger = logdown('prev state', { prefixColor: '#999999' });
  const actionLogger = logdown('action', { prefixColor: '#FFCC66' });
  const nextLogger = logdown('next state', { prefixColor: '#6699CC' });
  prevLogger.state = actionLogger.state = nextLogger.state = logger.state = { isEnabled: true };
  let prevState;

  return store => next => action => {
    if (!logger.state.isEnabled) {
      return next(action);
    }

    prevState = store.getState()

    if (opts.diff && typeof console.groupCollapsed === 'function') {
      logger.groupCollapsed('*action* `' + action.type + '`');
    }
    else {
      logger.log('*action* `' + action.type + '`');
    }

    if (opts.diff && typeof console.groupCollapsed === 'function') {
      prevLogger.log(prevState);
      actionLogger.log(action);
    }

    let result = next(action);

    if (opts.diff && typeof console.groupCollapsed === 'function') {
      nextLogger.log(store.getState());
      logger.groupEnd('*action* `' + action.type + '`');
    }

    return result;
  };
};

export default reduxLogdown;