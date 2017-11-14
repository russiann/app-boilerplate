import { h, Component } from 'preact';
import { Page, Navbar, Block, Panel, List, ListItem, GridCol, Button } from 'preact-f7';

const Drawer = () => (
  <Page>
    <List links>
      {/* <ListItem text="Administrators" link="/administrators" />
			<ListItem text="Roles" link="/roles" />
			<ListItem text="Categories" link="/categories" />
			<ListItem text="Products" link="/products" />
			<ListItem text="Groups" link="/groups" /> */}
      {/* <ListItem text="Sign Up" link="/signup" /> */}
      <ListItem text="Companies" link="/companies" closePanel />
      <ListItem text="New Company" link="/companies/new" closePanel />
    </List>
  </Page>
);

export default Drawer;