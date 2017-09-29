import { h } from 'preact';
import { Page, Navbar, Block, List, ListItem } from 'preact-f7';


const Home = ({ reduxState }) => (
	<Page name="home" >
		<Navbar title="Pages" />
		
		<Block title="Pages" />

		<List links>
			<ListItem text="Administrators" link="/administrators" />
			<ListItem text="Roles" link="/roles" />
			<ListItem text="Categories" link="/categories" />
			<ListItem text="Products" link="/products" />
			<ListItem text="Groups" link="/groups" />
		</List>

	</Page>
);

export default Home;
