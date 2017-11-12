import { connect } from 'preact-redux';
import Signup from './Signup';

import { services } from '../../feathers';
import { updateForm } from './redux/actions';

const mapStateToProps = (state) => ({
  customers:	state.customers,
  signupForm: state.signupForm
});

const mapDispatchToProps = (dispatch) => ({
  create: (e) => {
    console.log([e.target]);
    e.preventDefault();
    
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);
    // dispatch(services.customers.create(data));
  },
  updateForm
});

const SignupContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Signup);

export default SignupContainer;