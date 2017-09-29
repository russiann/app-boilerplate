import { h } from 'preact';
import { Page, Navbar, Block, List, ListItem, Table } from 'preact-f7';


const Home = ({ administrators }) => (
	<Page >
		<Navbar title="Administrators" />

		<table>
			<thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
			<tbody>
				{administrators.store.records.map(user => 
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
				)}
      </tbody>
		</table>
	
	</Page>
);

export default Home;
