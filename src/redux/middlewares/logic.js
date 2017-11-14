import { createLogic } from 'redux-logic';

const app = () => window.instance;

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
        .create({ ...defaultConfig, ...meta.toastOnFinish }).open();
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
  type: /^SERVICES_(.*)_(CREATE|UPDATE|PATCH|REMOVE)/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    if (action.meta && action.meta.showPreloader) {
      app().preloader.show();
    }

    next(action);
  }
});

const hidePreloader = createLogic({
  type: /^SERVICES_(.*)_(CREATE|UPDATE|PATCH|REMOVE)_(FULFILLED|REJECTED)$/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    if (action.meta && action.meta.showPreloader) {
      app().preloader.hide();
    }

    next(action);
  }
});

/**
|--------------------------------------------------
| Error Dialog
|--------------------------------------------------
*/

const errorAlert = createLogic({
  type: /^SERVICES_(.*)_(.*)_REJECTED$/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    const { name, message } = action.payload;
    const meta = action.meta;
    if (meta && meta.errorAlert) {
      window.instance.dialog.alert(message, name);
    }

    next(action);
  }
});

/**
|--------------------------------------------------
| Export
|--------------------------------------------------
*/

export default [toast, backOnFinish, hidePreloader, showPreloader, errorAlert];