import { connect } from 'preact-redux';
import Home from './Home';

const mapStateToProps = (state) => ({
	reduxState:	state
});

const mapDispatchToProps = (dispatch) => ({
	
});

const HomeContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

export default HomeContainer;