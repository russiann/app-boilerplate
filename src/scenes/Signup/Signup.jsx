import { h, Component } from 'preact';
import { Page, Navbar, Block, List, ListItem, Button } from 'preact-f7';
import { Form as F7Form, Input as F7Input } from 'preact-f7';
import { Form, connect } from '../../components/Form';

const Input = connect(F7Input);

class Signup extends Component {

  state = {
    form: {
      name: 'Russian',
      password: ''
    }
  }

  updateForm = (form) => {
    this.setState({ form });
  }

  render() {
    const { customers, create } = this.props;

    return (
      <Page name="Signup" >
        <Navbar title="Customer Signup" />
        
        <Block title="Welcome back!" />

        <Form data={this.state.form} onChange={this.updateForm} >
          <F7Form >
            <Input name="name" type="text" label="Name" placeholder="Your Name" />
            <Input name="password" type="password" label="Password" placeholder="Your Password"/>
          </F7Form>
        </Form>

        <Block>
          <Button fill big title="Signup!" onClick={() => create(this.state.form)} />
        </Block>
        
      </Page>
    )
  }
}

// const Signup = ({ customers, create }) => {

//   let data = {
//     name: 'Russian',
//     password: ''
//   };

//   state = {
//     form: {
//       name: 'Russian',
//       password: ''
//     }
//   }

//   updateForm = (form) => {
//     this.setState({ form });
//   }
  
//   return (
//     <Page name="Signup" >
//       <Navbar title="Customer Signup" />
      
//       <Block title="Create a new Customer" />

//       <Form data={this.state.form} onChange={console.log} onFormDataChange={console.log} >
//         <F7Form >
//           <Input name="name" type="text" label="Name" placeholder="Your Name" />
//           <F7Input name="foo" type="text" label="Foo" placeholder="OnChangeTeste" />
//           <Input name="password" type="password" label="Password" placeholder="Your Password"/>
//           <input type="submit" value="SEND"/>
//         </F7Form>
//       </Form>

//       <Block>
//         <Button big title="Signup!" onClick={() => create(el)} />
//       </Block>
      
//     </Page>
//   )
// };

export default Signup;
