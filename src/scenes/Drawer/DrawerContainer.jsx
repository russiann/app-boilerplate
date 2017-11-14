import { connect } from 'preact-redux';
import Drawer from './Drawer';

const mapStateToProps = (state) => ({
  reduxState: state
});

const mapDispatchToProps = (dispatch) => ({

});

const DrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);

export default DrawerContainer;