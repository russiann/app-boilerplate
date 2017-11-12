import { connect } from 'preact-redux';
import Companies from './CompaniesCreate';

import { services } from '../../../feathers';

const mapStateToProps = (state) => ({
	companies:	state.companies
});

const mapDispatchToProps = {
  create: services.companies.create,
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