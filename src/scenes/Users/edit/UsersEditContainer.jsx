import { connect } from 'preact-redux';
import UsersEdit from './UsersEdit';
import metalize from '../../../helpers/metalize';
import before from '../../../helpers/before';

import { services } from '../../../feathers';

/**
|--------------------------------------------------
| Configure Metas
|--------------------------------------------------
*/

const metas = {
  get: {
    showPreloader: true,
    errorAlert: true
  },
  patch: {
    showPreloader: true,
    errorAlert: true,
    backOnFinish: true,
    toastOnFinish: {
      text: 'Usuário editado com sucesso!'
    }
  },
  remove: {
    showPreloader: true,
    errorAlert: true,
    backOnFinish: true,
    toastOnFinish: {
      text: 'Usuário excluído com sucesso!'
    },
    confirmDialog: {
      title: 'Atenção',
      message: 'Tem certeza que deseja prosseguir com a exclusão?'
    }
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
  remove: metalize(metas.remove, before(services.users.remove)),
  patch:  metalize(metas.patch, services.users.patch),
  get:    metalize(metas.get, services.users.get)
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersEdit);

export default UsersContainer;