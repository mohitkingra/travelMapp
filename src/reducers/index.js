import { TOGGLE_CONTINENT, TOGGLE_COUNTRY, TOGGLE_CITY } from '../actions/index.js';

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
                    name: "India",
                    cities: [
                      {
                        name: "New Delhi",
                      },
                      {
                        name: "Bangalore",
                      }]
                  }, 
                  {
                    name: "China",
                    cities: [
                      {
                        name: "Shenzhen",
                      },
                      {
                        name: "Beijing",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "Oceania",
                  countries:[
                  {
                    name: "Australia",
                    cities: [
                      {
                        name: "Sydney",
                      },
                      {
                        name: "Melbourne",
                      }]
                  }, 
                  {
                    name: "New Zealand",
                    cities: [
                      {
                        name: "Auckland",
                      },
                      {
                        name: "Wellington",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "Europe",
                  countries:[
                  {
                    name: "Germany",
                    cities: [
                      {
                        name: "Berlin",
                      },
                      {
                        name: "Munich",
                      }]
                  }, 
                  {
                    name: "France",
                    cities: [
                      {
                        name: "Paris",
                      },
                      {
                        name: "Lyon",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "North America",
                  countries:[
                  {
                    name: "Canada",
                    cities: [
                      {
                        name: "Toronto",
                      },
                      {
                        name: "Vancouver",
                      }]
                  }, 
                  {
                    name: "United States",
                    cities: [
                      {
                        name: "New York",
                      },
                      {
                        name: "Los Angeles",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "South America",
                  countries:[
                  {
                    name: "Argentina",
                    cities: [
                      {
                        name: "Buones Aires",
                      },
                      {
                        name: "Mendoza",
                      }]
                  }, 
                  {
                    name: "Brazil",
                    cities: [
                      {
                        name: "Rio De Janeiro",
                      },
                      {
                        name: "Sao Paulo",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "Antartica",
                  countries:[
                  {
                    name: "Antartica",
                    cities: [{
                      name: "Antartica"
                    }]
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
