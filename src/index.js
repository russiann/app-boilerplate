import { Provider } from 'preact-redux';
import configureStore from './redux/store';
import Root from './Root';

import './style';
import 'framework7/dist/css/framework7.css';

/**
|--------------------------------------------------
| Configure Redux Store
|--------------------------------------------------
*/

export const store = configureStore();


/**
|--------------------------------------------------
| Render Root Component
|--------------------------------------------------
*/

const App = () => (
	<Provider store={store}>
		<Root />
	</Provider>
);

export default App;
