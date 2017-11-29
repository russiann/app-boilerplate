import { connect } from 'preact-redux';
import Roles from './Roles';

import { services } from '../../../feathers';

const mapStateToProps = (state) => ({
  roles:	state.roles.snapshot
});

const mapDispatchToProps = {
  create: services.roles.create,
  get: services.roles.get,
  patch: services.roles.patch,
  remove: services.roles.remove,
  find: services.roles.find
};

const RolesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Roles);

export default RolesContainer;