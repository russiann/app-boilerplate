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

  edit = (id) => {
    window.instance.router.navigate({ url: `/users/${id}` });
  }

  render() {
    const { roles } = this.props;

    return (
      <Page name="Roles" >
        <Navbar title="Roles" />

        <If condition={ roles.store && roles.store.records }>

          <Table card>
            <TableHeader>
              <TableRow>
                <TableCell header label>ID</TableCell>
                <TableCell header label>Name</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <For each="role" of={roles.store.records}>
                <TableRow key={role._id} onClick={() => this.edit(role._id)}>
                  <TableCell label>{role._id}</TableCell>
                  <TableCell label>{role.name}</TableCell>
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
