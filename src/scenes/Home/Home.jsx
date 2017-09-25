import { h } from 'preact';
import { Page, Navbar, Block } from 'preact-f7';


const Home = ({ reduxState }) => (
	<Page name="home" >
		<Navbar title="HomePage" />
		<Block title="Home Page" />
		<pre>{JSON.stringify(reduxState, null, 2)}</pre>
	</Page>
);

export default Home;
