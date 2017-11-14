import { connect } from 'preact-redux';
import Users from './UsersCreate';
import metalize from '../../../helpers/metalize';

import { services } from '../../../feathers';

/**
|--------------------------------------------------
| Configure Metas
|--------------------------------------------------
*/

const metas = {
  create: {
    backOnFinish: true,
    toastOnFinish: {
      text: 'Usuário cadastrado com sucesso!'
    },
    showPreloader: true
  }
};

/**
|--------------------------------------------------
| Configure Props
|--------------------------------------------------
*/

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = {
  create: metalize(metas.create, services.users.create)
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;