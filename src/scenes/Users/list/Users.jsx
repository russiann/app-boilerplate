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

          <Card className="data-table data-table-init">

            <CardHeader>
              <div className="data-table-header">
                <div className="data-table-title">Nutrition</div>
                <div className="data-table-actions">
                  <a className="link icon-only">
                    <Icon ifIos="f7:sort" ifMaterial="material:sort" />
                  </a>
                  <a className="link icon-only">
                    <Icon ifIos="f7:more_vertical_round" ifMaterial="material:more_vert" />
                  </a>
                </div>
              </div>
              <div className="data-table-header-selected">
                <div className="data-table-title-selected">
                  <span className="data-table-selected-count"></span>
                  items selected
          </div>
                <div className="data-table-actions">
                  <a className="link icon-only">
                    <Icon ifIos="f7:trash" ifMaterial="material:delete" />
                  </a>
                  <a className="link icon-only">
                    <Icon ifIos="f7:more_vertical_round" ifMaterial="material:more_vert" />
                  </a>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <table>
                <TableHeader>
                  <TableRow>
                    <TableCell header checkbox onChange={console.log} />
                    <TableCell header label>ID</TableCell>
                    <TableCell header label>Name</TableCell>
                    <TableCell header label>E-mail</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <For each="user" of={users.store.records}>
                    <TableRow key={user._id}>
                      <TableCell checkbox onChange={console.log} />
                      <TableCell label>{user._id}</TableCell>
                      <TableCell label>{user.name}</TableCell>
                      <TableCell label>{user.email}</TableCell>
                    </TableRow>
                  </For>
                </TableBody>
              </table>
            </CardContent>
          </Card>

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
