import { h, Component } from 'preact';
import { Page, Navbar, Block, List, ListItem, Button } from 'preact-f7';
import { Form as F7Form, Input as F7Input, Icon } from 'preact-f7';
import { Form, connect } from '../../../components/Form';

const Input = connect(F7Input);

class UsersCreate extends Component {

  state = {
    user: { ...defaults.user }
  }

  componentDidMount() {
    const { get } = this.props;
    setTimeout(() => {
      const { params } = this.context.getF7Page().route;
      get(params.id);
    });
  }

  redirect = () => {
    window.instance.router.navigate({ url: '/users' });
  }

  updateForm = (form) => (data) => {
    this.setState({ [form]: Object.assign({}, defaults[form], data) });
  }

  render() {
    const { users, create } = this.props;

    return (
      <Page name="NewUser" >
        <Navbar
          title="New User"
          left={<Icon ifIos="material:list" ifMaterial="material:menu" navbarIcon openPanel />}
          disableBackButton
          leftOpenModal="left"
        />
        

        <Block title="Users Infos" />

        {console.log(users)}
        <If condition={users.get && users.get.isFinished}>

          <Form data={this.state.user} defaultData={users.get.data} onChange={this.updateForm('user')} >
            <F7Form >
              <Input name="name" type="text" label="Name" placeholder="User name" />
              <Input name="email" type="text" label="E-mail" placeholder="User e-mail" />
              <Input name="Password" type="password" label="Password" placeholder="********" />
            </F7Form>
          </Form>

          <Button title="Redirect" onClick={this.redirect} />

          <Block>
            <Button fill big title="Salvar" onClick={() => create(this.state.user)} />
          </Block>

        </If>
        
      </Page>
    )
  }
}

const defaults = {
  user: {
    name: '',
    email: '',
    password: ''
  }
};

export default UsersCreate;
