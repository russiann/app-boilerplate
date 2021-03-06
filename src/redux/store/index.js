import { createStore, applyMiddleware } from 'redux';
import { saveState, loadState } from './local-storage';
import { throttle } from 'lodash';

import rootReducer from '../reducers';
import middlewares from '../middlewares';

export default function configureStore() {
	// Engage the Chrome extension "Redux DevTools" if it is installed on the browser.
	// This extension watches reducers and logs their invocations, actions and changing state.
	// It caches activity so you can 'time travel' through state changes.
	// It runs in an extension reducing the size of your app bundle.
	// This interface can be left in prod bundles and the extension activated in the field as needed.
	// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-app-launcher-info-dialog
	const createStoreWithDevTools = window.devToolsExtension
		? window.devToolsExtension()(createStore)
		: createStore;

	const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStoreWithDevTools);

	const store = createStoreWithMiddlewares(rootReducer);
	window.store = store;

	// store.subscribe(throttle(() => {
	// 	saveState(store.getState(), { omit: ['framework7'] });
	// },1000))
  
	return store;
}