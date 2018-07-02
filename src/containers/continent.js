import { connect } from 'react-redux';
import { toggleContinent, toggleCountry } from '../actions/index.js';
import ContinentList  from '../components/continent.js';

function mapStateToProps(state) {
	return {
		continents: state.continentReducer.continents,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleContinent: name => dispatch(toggleContinent(name)),
		toggleCountry: name => dispatch(toggleCountry(name)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)( ContinentList )
