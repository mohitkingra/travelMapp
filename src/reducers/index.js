import { TOGGLE_CONTINENT } from '../actions/index.js';

const initialState = {
  continents: [ {select: 0, name: "Africa"}, 
                {select: 0, name: "Asia"}, 
                {select: 0, name: "Australia"}, 
                {select: 0, name: "Europe"}, 
                {select: 0, name: "North America"}, 
                {select: 0, name: "South America"}, 
                {select: 0, name: "Antartica"}]
}

export default function continentReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CONTINENT': {
      var visiblecontinents = state.continents.map(continent => {
        return continent.name === action.name ? { ...continent, select: continent.select ^ 1} : { ...continent}
      });      

      return { ...state, continents: visiblecontinents };
    }
    default: {
      return state;
    }
  }
}
