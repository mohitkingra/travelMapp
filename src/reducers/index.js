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
                        select: 0,
                        name: "Nairobi",
                      },
                      {
                        select: 0,
                        name: "Nakuru",
                      }]
                    },
                    {
                      select: 0,
                      name: "Tanzania",
                      cities: [
                      {
                        select: 0,
                        name: "Arusha",
                      },
                      {
                        select: 0,
                        name: "Moshi",
                      }]
                    }]
                }, 
                {
                  select: 0, 
                  name: "Asia", 
                  countries:[
                  {
                    select: 0,
                    name: "India",
                    cities: [
                      {
                        select: 0,
                        name: "New Delhi",
                      },
                      {
                        select: 0,
                        name: "Bangalore",
                      }]
                  }, 
                  {
                    select: 0,
                    name: "China",
                    cities: [
                      {
                        select: 0,
                        name: "Shenzhen",
                      },
                      {
                        select: 0,
                        name: "Beijing",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "Oceania",
                  countries:[
                  {
                    select: 0,
                    name: "Oceania",
                    cities: [
                      {
                        select: 0,
                        name: "Sydney",
                      },
                      {
                        select: 0,
                        name: "Melbourne",
                      }]
                  }, 
                  {
                    select: 0,
                    name: "New Zealand",
                    cities: [
                      {
                        select: 0,
                        name: "Auckland",
                      },
                      {
                        select: 0,
                        name: "Wellington",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "Europe",
                  countries:[
                  {
                    select: 0,
                    name: "Germany",
                    cities: [
                      {
                        select: 0,
                        name: "Berlin",
                      },
                      {
                        select: 0,
                        name: "Munich",
                      }]
                  }, 
                  {
                    select: 0,
                    name: "France",
                    cities: [
                      {
                        select: 0,
                        name: "Paris",
                      },
                      {
                        select: 0,
                        name: "Lyon",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "North America",
                  countries:[
                  {
                    select: 0,
                    name: "Canada",
                    cities: [
                      {
                        select: 0,
                        name: "Toronto",
                      },
                      {
                        select: 0,
                        name: "Vancouver",
                      }]
                  }, 
                  {
                    select: 0,
                    name: "United States",
                    cities: [
                      {
                        select: 0,
                        name: "New York",
                      },
                      {
                        select: 0,
                        name: "Los Angeles",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "South America",
                  countries:[
                  {
                    select: 0,
                    name: "Argentina",
                    cities: [
                      {
                        select: 0,
                        name: "Buones Aires",
                      },
                      {
                        select: 0,
                        name: "Mendoza",
                      }]
                  }, 
                  {
                    select: 0,
                    name: "Brazil",
                    cities: [
                      {
                        select: 0,
                        name: "Rio De Janeiro",
                      },
                      {
                        select: 0,
                        name: "Sao Paulo",
                      }]
                  }]
                }, 
                {
                  select: 0, 
                  name: "Antartica",
                  countries:[
                  {
                    select: 0,
                    name: "Antartica",
                    cities: [{
                      select: 0,
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
