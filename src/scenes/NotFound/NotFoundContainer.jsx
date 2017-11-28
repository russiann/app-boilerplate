import { connect } from 'preact-redux';
import NotFound from './NotFound';

const mapStateToProps = (state) => ({
	reduxState:	state
});

const mapDispatchToProps = (dispatch) => ({
	
});

const NotFoundContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NotFound);

export default NotFoundContainer;