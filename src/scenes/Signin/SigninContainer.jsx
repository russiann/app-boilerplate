import { connect } from 'preact-redux';
import Signin from './Signin';
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
    errorAlert: true,
    redirectTo: '/home'
  }
};

/**
|--------------------------------------------------
| Configure Props
|--------------------------------------------------
*/

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  authenticate: metalize(metas.authenticate, services.authentication.authenticate)
};

const SigninContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);

export default SigninContainer;