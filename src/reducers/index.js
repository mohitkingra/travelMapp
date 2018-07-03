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
                      name: "Tanzania",
                      cities: [
                      {
                        name: "Arusha",
                      },
                      {
                        name: "Moshi",
                      }]
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
                  name: "Oceania",
                  countries:[
                  {
                    name: "Australia"
                  }, 
                  {
                    name: "New Zealand"
                  }]
                }, 
                {
                  select: 0, 
                  name: "Europe",
                  countries:[
                  {
                    name: "Germany"
                  }, 
                  {
                    name: "France"
                  }]
                }, 
                {
                  select: 0, 
                  name: "North America",
                  countries:[
                  {
                    name: "Canada"
                  }, 
                  {
                    name: "United States"
                  }]
                }, 
                {
                  select: 0, 
                  name: "South America",
                  countries:[
                  {
                    name: "Argentina"
                  }, 
                  {
                    name: "Brazil"
                  }]
                }, 
                {
                  select: 0, 
                  name: "Antartica",
                  countries:[
                  {
                    name: "Antartica"
                  }]
                }
              ]
  }

export default function continentReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CONTINENT': {
      var visiblecontinents = state.continents.map(continent => {
        return continent.name === action.name ? { ...continent, select: continent.select ^ 1} : { ...continent, select: 0}
      });      

      return { ...state, continents: visiblecontinents };
    }
    case 'TOGGLE_COUNTRY': {

      var visiblecontinents = state.continents.map(continent => {
        return continent.select === 1 ? { ...continent, countries : continent.countries.map((country) => {
            return country.name === action.name ? { ...country, select: country.select ^ 1} : { ...country, select: 0} })
        } : { ...continent}
       }); 
      
      return { ...state, continents: visiblecontinents};
    }
    case 'TOGGLE_CITY': {
      var visiblecontinents = state.continents.map(continent => {
        return continent.select === 1 ? { ...continent, countries : continent.countries.map((country) => {
          return country.select === 1 ? { ...country, cities: country.cities.map((city) => {
            return city.name === action.name ? { ...city, select: city.select ^ 1} : { ...city}
          })} : { ...country, select: 0}
        })} : { ...continent, select: 0}
      });

      return { ...state, continents: visiblecontinents};
    }
    default: {
      return state;
    }
  }
}
