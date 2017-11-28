import { h, Component } from 'preact';
import { Page, Navbar, Block, List, ListItem, Button } from 'preact-f7';
import { Form as F7Form, Input as F7Input, Icon } from 'preact-f7';
import { Form, connect } from '../../../components/Form';

const Input = connect(F7Input);

class UsersCreate extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    const { get } = this.props;
    setTimeout(() => {
      const { params } = this.context.getF7Page().route;
      get(params.id);
    });
  }

  updateForm = (form) => (data) => {
    this.setState({ [form]: Object.assign({}, data) });
  }

  getUserName = (users) => {
    return users.get.data ? users.get.data.name : false
  }

  render() {
    const { users, patch, remove } = this.props;

    return (
      <Page name="EditUser" >
        <Navbar
          title="Edit User"
          subtitle={this.getUserName(users)}
          left={<Icon ifIos="material:list" ifMaterial="material:menu" navbarIcon openPanel />}
          disableBackButton
          leftOpenModal="left"
        />

        <Block title="Users Infos" />

        <If condition={users.get && !users.get.getPending}>

          <Form data={this.state.user} defaultData={users.get.data} onChange={this.updateForm('user')} >
            <F7Form >
              <Input name="name" type="text" label="Name" placeholder="User name" />
              <Input name="email" type="text" label="E-mail" placeholder="User e-mail" />
            </F7Form>
          </Form>

          <Block>
            <Button big color="red" title="Deletar" onClick={() => remove(users.get.data._id)} />
          </Block>

          <Block>
            <Button fill big title="Salvar" onClick={() => patch(users.get.data._id, this.state.user)} />
          </Block>

        </If>
        
      </Page>
    )
  }
}

export default UsersCreate;
