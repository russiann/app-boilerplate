import { h } from 'preact';
import { Page, Navbar, Block, List, ListItem, Form, Input, Button } from 'preact-f7';


class Form {

  state = {

  }

  render() {
    return (
      <Form >
        <Input type="text" label="Name" placeholder="Your Name" />
        <Input type="password" label="Password" placeholder="Your Password"/>
        <input type="submit" value="SEND"/>
        <Block>
          <Button big title="Signup!" onClick={() => create(el)} />
        </Block>
      </Form>

    );
  }
};

export default Form;
