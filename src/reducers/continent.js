import {
  ALL_CONTINENT_LOAD,
  AFRICA_CONTINENT_LOAD,
} from '../actions/continent.js';

const initialState = {
  state:-1,
};

const continentReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case ALL_CONTINENT_LOAD: {
      return {
       state:-1,
      };
    }
    case AFRICA_CONTINENT_LOAD: {
      return {
        state:0,
      };
    }
    default: {
      return state;
    }
  }
};

export default continentReducer;