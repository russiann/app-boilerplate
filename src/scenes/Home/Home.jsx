import { h } from 'preact';
import { Page, Navbar, Block, List, ListItem, Icon, Button } from 'preact-f7';


const Home = ({ reduxState }) => (
	<Page name="home" >
		<Navbar
			left={<Icon ifIos="material:list" ifMaterial="material:menu" navbarIcon openPanel />}
			title="Dashboard"
			disableBackButton
			leftOpenModal="left"
		/>
		
		<Block title="Pages" />

		<List links>
			{/* <ListItem text="Administrators" link="/administrators" />
			<ListItem text="Roles" link="/roles" />
			<ListItem text="Categories" link="/categories" />
			<ListItem text="Products" link="/products" />
			<ListItem text="Groups" link="/groups" /> */}
			{/* <ListItem text="Sign Up" link="/signup" /> */}
			<ListItem text="Companies" link="/companies" />
			<ListItem text="New Company" link="/companies/new" />
		</List>

		<Button raised openPanel>Open left panel</Button>

	</Page>
);

export default Home;
