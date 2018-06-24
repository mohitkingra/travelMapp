import { connect } from 'react-redux';
import { toggleContinent } from '../actions/index.js';
import Item  from '../components/item.js';

function mapDispatchToProps(dispatch) {
	console.log("dispatch" +dispatch);
	return {
		toggleContinent: name => dispatch(toggleContinent(name)),
	}
}

export default connect(mapDispatchToProps)( Item )
