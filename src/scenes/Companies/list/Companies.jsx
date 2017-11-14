import { h, Component } from 'preact';
import { Page, Navbar, Block, List, ListItem } from 'preact-f7';
import { Table, TableHeader, TableRow, TableCell, TableBody, Icon } from 'preact-f7';

class Customers extends Component {

  componentWillMount() {
    const { find, test, get } = this.props;
    console.log('services', test)

    const query = {
      $limit:1
    }
    find({query})
    get("5a044ea3eac79af380b3011f");
      // .then(result => {
      //   console.log('foo', result);
      // })
  }

  render() {
    const { companies } = this.props;

    return (
      <Page name="Companies" >
        <Navbar
          title="Companies"
          left={<Icon ifIos="material:list" ifMaterial="material:menu" navbarIcon openPanel />}
          disableBackButton
          leftOpenModal="left"
        />

        <If condition={
          companies &&
          companies.store &&
          companies.store.records
        }>

          <Table card>
            <TableHeader>
              <TableRow>
                <TableCell header label>Moip ID</TableCell>
                <TableCell header label>Nome</TableCell>
                <TableCell header label>Slug</TableCell>
                <TableCell header label>Token</TableCell>
                <TableCell header label>Link</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <For each="item" of={companies.store.records}>
                <TableRow key={item._id}>
                  <TableCell label>{item.account.id}</TableCell>
                  <TableCell label>{item.name}</TableCell>
                  <TableCell label>{item.slug}</TableCell>
                  <TableCell label>{item.account.accessToken}</TableCell>
                  <TableCell label>
                    <a href={item.link} target="_blank">{item.link}</a>
                  </TableCell>
                </TableRow>
              </For>
            </TableBody>
          </Table>

        </If>
      
      </Page>
    )
  }
}

// const Home = ({ administrators }) => (
// 	<Page >
// 		<Navbar title="Administrators" />

// 		<table>
// 			<thead>
//         <tr>
//           <th>Nome</th>
//           <th>Email</th>
//         </tr>
//       </thead>
// 			<tbody>
// 				{administrators.store.records.map(user => 
//           <tr key={user._id}>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//           </tr>
// 				)}
//       </tbody>
// 		</table>
	
// 	</Page>
// );

export default Customers;
