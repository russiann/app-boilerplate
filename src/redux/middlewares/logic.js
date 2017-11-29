import { createLogic } from 'redux-logic';
import metalize from '../../helpers/metalize';

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
  type: /^SERVICES_(.*)_(.*)/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    if (action.meta && action.meta.showPreloader) {
      app().preloader.show();
    }

    next(action);
  }
});

const hidePreloader = createLogic({
  type: /^SERVICES_(.*)_(.*)_(FULFILLED|REJECTED)$/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    if (action.meta && action.meta.showPreloader) {
      setTimeout(app().preloader.hide, 500);
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
| Foo
|--------------------------------------------------
*/

const fooBar = createLogic({
  type: /^BEFORE_PROCCESS_FEATHERS_PAYLOAD$/,
  latest: true,
  process({ getState, action }, dispatch, next) {

    const { name, message } = action.payload;
    const meta = action.meta;
    if (meta && meta.confirmDialog) {
      window.instance.dialog.confirm(meta.confirmDialog.message, meta.confirmDialog.title, () => {
        dispatch(
          metalize(meta, action.payload.action)(...action.payload.args)
        );
      });
    }

  }
});

/**
|--------------------------------------------------
| Export
|--------------------------------------------------
*/

export default [toast, backOnFinish, hidePreloader, showPreloader, errorAlert, fooBar];