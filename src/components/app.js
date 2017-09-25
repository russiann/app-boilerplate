import { h } from 'preact';
import 'framework7/dist/css/framework7.css';
import F7 from 'framework7';
import { Framework7, View, Router, Route, Navbar, Page, Block } from 'preact-f7';

const params = {
	view: { pushState: true }
};

const HomePage = () => (
	<Page>
		<Navbar title="Home Page" />
		<Block title="Block Title" />
	</Page>
);

const App = () => (
	<Framework7 F7={F7} params={params}>
		<View>
			<Router>
				<Route path="/" component={HomePage} />
			</Router>
		</View>
	</Framework7>
);

export default App;