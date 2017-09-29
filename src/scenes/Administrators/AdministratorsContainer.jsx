import { connect } from 'preact-redux';
import Administrators from './Administrators';

import { services } from '../../feathers';

const mapStateToProps = (state) => ({
	administrators:	state.administrators
});

const mapDispatchToProps = {
  create: services.administrators.create,
  get: services.administrators.get,
  patch: services.administrators.patch,
  remove: services.administrators.remove,
  find: services.administrators.find
};

const AdministratorsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Administrators);

export default AdministratorsContainer;