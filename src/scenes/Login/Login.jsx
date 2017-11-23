import { h, Component } from 'preact';
import { Page, BlockFooter, List, ListItem, Button } from 'preact-f7';
import { Form as F7Form, Input as F7Input, Icon } from 'preact-f7';
import { Form, connect } from '../../components/Form';

const Input = connect(F7Input);

class Home extends Component {

  state = {
    signInForm: {
      strategy: 'local',
      email: 'russian.reboucas@gmail.com',
      password: '123123'
    }
  }

  updateForm = (form) => (data) => {
    this.setState({ [form]: data });
  }

  render() {
    const { authenticate } = this.props;

    return (
      <Page name="Dashboard" className="login-screen-content">

        <div class="login-screen-title">MyApp</div>

        <Form data={this.state.signInForm} onChange={this.updateForm('signInForm')}>
          <F7Form>
            <Input name="email" type="text" label="Username" placeholder="Your username" />
            <Input name="password" type="password" label="Password" placeholder="Your password" />
          </F7Form>
        </Form>

        <List simple>
          <ListItem>
            <Button title="Sign In" onClick={() => authenticate(this.state.signInForm)} />
            {/* <a href="#" class="item-link list-button" click="signIn">Sign In</a> */}
          </ListItem>
        </List>

        <BlockFooter>
          Some text about login information.
      <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </BlockFooter>

      </Page>
    )
  }
}

export default Home;
