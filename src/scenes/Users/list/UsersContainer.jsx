import { connect } from 'preact-redux';
import Users from './Users';

import { services } from '../../../feathers';

const mapStateToProps = (state) => ({
  users:	state.users
});

const mapDispatchToProps = {
  create: services.users.create,
  get: services.users.get,
  patch: services.users.patch,
  remove: services.users.remove,
  find: services.users.find
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;