import { connect } from 'react-redux';
import { toggleContinent } from '../actions/index.js';
import ContinentList  from '../components/continent.js';

function mapStateToProps(state) {
	return {
		continents: state.continentReducer.continents,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleContinent: name => dispatch(toggleContinent(name)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)( ContinentList )
