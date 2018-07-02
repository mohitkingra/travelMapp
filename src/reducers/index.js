import { TOGGLE_CONTINENT } from '../actions/index.js';

const initialState = {
  continents: [{
                  select: 0, 
                  name: "Africa", 
                  countries:[
                  {
                      select: 0,
                      name: "Kenya",
                      cities: [
                      {
                        name: "Nairobi",
                      },
                      {
                        name: "Nakuru",
                      }]
                    },
                    {
                      select: 0,
                      name: "Tanzania"
                  }]
                }, 
                {
                  select: 0, 
                  name: "Asia", 
                  countries:[
                  {
                    name: "India"
                  }, 
                  {
                    name: "China"
                  }]
                }, 
                {
                  select: 0, 
                  name: "Australia"
                }, 
                {
                  select: 0, 
                  name: "Europe"
                }, 
                {
                  select: 0, 
                  name: "North America"
                }, 
                {
                  select: 0, 
                  name: "South America"
                }, 
                {
                  select: 0, name: "Antartica"
                }]
              }

export default function continentReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CONTINENT': {
      var visiblecontinents = state.continents.map(continent => {
        return continent.name === action.name ? { ...continent, select: continent.select ^ 1} : { ...continent}
      });      

      return { ...state, continents: visiblecontinents };
    }
    case 'TOGGLE_COUNTRY': {
      var index = state.continents.findIndex(continent => continent.select === 1);


      var visiblecontinents = state.continents.map(continent => {
        if(continent.select === 1){

          continent.countries.forEach((country) =>{
            if(country.name === action.name){
              country.select = country.select ^1;    
            }
          });
        }          
      }); 

      return { ...state, continents: visiblecontinents};
    }
    default: {
      return state;
    }
  }
}
