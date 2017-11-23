import { connect } from 'preact-redux';
import Login from './Login';
import metalize from '../../helpers/metalize';

import { services } from '../../feathers';

/**
|--------------------------------------------------
| Configure Metas
|--------------------------------------------------
*/

const metas = {
  authenticate: {
    showPreloader: true,
    errorAlert: true
  }
};

/**
|--------------------------------------------------
| Configure Props
|--------------------------------------------------
*/

const mapStateToProps = (state) => ({

});

console.log('>', services.authentication.authenticate);

const mapDispatchToProps = {
  authenticate: metalize(metas.authenticate, services.authentication.authenticate)
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;