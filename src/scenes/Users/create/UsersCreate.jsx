import { h, Component } from 'preact';
import { Page, Navbar, Block, List, ListItem, Button } from 'preact-f7';
import { Form as F7Form, Input as F7Input, Icon } from 'preact-f7';
import { Form, connect } from '../../../components/Form';

const Input = connect(F7Input);

class UsersCreate extends Component {

  state = {
    user: {}
  }

  redirect = () => {
    window.instance.router.navigate({ url: '/users' });
  }

  updateForm = (form) => (data) => {
    this.setState({ [form]: Object.assign({}, data) });
  }

  render() {
    const { user, create } = this.props;

    return (
      <Page name="NewUser" >
        <Navbar
          title="New User"
          left={<Icon ifIos="material:list" ifMaterial="material:menu" navbarIcon openPanel />}
          disableBackButton
          leftOpenModal="left"
        />
        

        <Block title="Users Infos" />
        <Form data={this.state.user} onChange={this.updateForm('user')} >
          <F7Form >
            <Input name="name" type="text" label="Name" placeholder="User name" />
            <Input name="email" type="text" label="E-mail" placeholder="User e-mail" />
            <Input name="Password" type="password" label="Password" placeholder="********" />
          </F7Form>
        </Form>

        <Block>
          <Button fill big title="Cadastrar" onClick={() => create(this.state.user)} />
        </Block>
        
      </Page>
    )
  }
}

const defaults = {
  user: {
    name: 'Russian',
    email: 'russian.reboucas@gmail.com',
    password: '123123'
  }
};

export default UsersCreate;
