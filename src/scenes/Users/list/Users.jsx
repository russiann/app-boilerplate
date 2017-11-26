import { h, Component } from 'preact';
import {
  Page, 
  Navbar, 
  Block, 
  List, 
  ListItem , 
  Table, 
  TableHeader, 
  TableRow, 
  TableCell, 
  TableBody, 
  Icon,
  Fab, FabIcon, FabButtons, FabItem,
  Card, CardHeader, CardContent, CardFooter
} from 'preact-f7';

class Users extends Component {

  redirectToNew = () => {
    window.instance.router.navigate({ url: '/users/new' });
  }

  render() {
    const { users } = this.props;

    return (
      <Page name="Users" >
        <Navbar
          title="Users"
          left={<Icon ifIos="material:list" ifMaterial="material:menu" navbarIcon openPanel />}
          disableBackButton
          leftOpenModal="left"
        />

        <If condition={ users.store && users.store.records }>

          <Table card>
            <TableHeader>
              <TableRow>
                <TableCell header checkbox />
                <TableCell header label>ID</TableCell>
                <TableCell header label>Name</TableCell>
                <TableCell header label>E-mail</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <For each="user" of={users.store.records}>
                <TableRow key={user._id}>
                  <TableCell checkbox />
                  <TableCell label>{user._id}</TableCell>
                  <TableCell label>{user.name}</TableCell>
                  <TableCell label>{user.email}</TableCell>
                </TableRow>
              </For>
            </TableBody>
          </Table>

        </If>

        <Fab position='right-bottom' onClick={this.redirectToNew}>
          <FabIcon>
            <i className="icon material-icons">add</i>
          </FabIcon>
        </Fab>
      
      </Page>
    )
  }
}

export default Users;
