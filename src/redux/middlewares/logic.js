import { createLogic } from 'redux-logic';

/**
|--------------------------------------------------
| Toast
|--------------------------------------------------
*/

const toast = createLogic({
  type: /FULFILLED$/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    const defaultConfig = {
      text: '',
      closeTimeout: 2000
    };

    const meta = action.meta;
    if (meta && meta.toastOnFinish) {
      window.instance.toast
        .create({ ...defaultConfig, ...meta.toastOnFinish}).open();
    }

    next(action);
  }
});

/**
|--------------------------------------------------
| Back page when finish
|--------------------------------------------------
*/

const backOnFinish = createLogic({
  type: /FULFILLED$/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    const meta = action.meta;
    if (meta && meta.backOnFinish) {
      window.instance.router.back();
    }

    next(action);
  }
});

/**
|--------------------------------------------------
| Show/Hide Preloader
|--------------------------------------------------
*/

const showPreloader = createLogic({
  type: /^SERVICES_(.*)_CREATE/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    const meta = action.meta;
    if (meta && meta.showPreloader) {
      window.instance.preloader.show();
    }

    next(action);
  }
});

const hidePreloader = createLogic({
  type: /^SERVICES_(.*)_CREATE_(FULFILLED|REJECTED)$/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    const meta = action.meta;
    if (meta && meta.showPreloader) {
      window.instance.preloader.hide();
    }

    next(action);
  }
});

/**
|--------------------------------------------------
| Export
|--------------------------------------------------
*/

export default [toast, backOnFinish, hidePreloader, showPreloader];