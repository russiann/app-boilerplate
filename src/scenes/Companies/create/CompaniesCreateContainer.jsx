import { connect } from 'preact-redux';
import Companies from './CompaniesCreate';
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
      text: 'Empresa cadastrada com sucesso!'
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
  companies: state.companies
});

const mapDispatchToProps = {
  create: metalize(metas.create, services.companies.create),
  get: services.companies.get,
  patch: services.companies.patch,
  remove: services.companies.remove,
  find: services.companies.find
};

const CompaniesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Companies);

export default CompaniesContainer;