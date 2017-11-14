import { h } from 'preact';
import { Page, Navbar, Block, List, ListItem, Icon, Button } from 'preact-f7';


const Home = ({ reduxState }) => (
	<Page name="Dashboard" >
		<Navbar
			left={<Icon ifIos="material:list" ifMaterial="material:menu" navbarIcon openPanel />}
			title="Dashboard"
			disableBackButton
			leftOpenModal="left"
		/>

		<Block title="Dashboard" />

	</Page>
);

export default Home;
