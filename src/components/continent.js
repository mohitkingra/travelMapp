import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types'

import Item from './item.js';

export default class ContinentList extends React.Component {
  constructor(props) {  
      super(props);
  }

  render(){    

//filter continents
      var continentList = this.props.continents;
      continentList = continentList.filter(continent => continent.select ===1);
      if(continentList.length === 0){
        continentList = this.props.continents;
      }

//filter countries
      var countries = [];
      var cities = [];

      if(continentList.length === 1){
          countries = continentList[0].countries.map((country, index) => {
          return(
            <Item key={"Country" + index} id={"Country" + index} name={country.name} toggleCountry={this.props.toggleCountry} />
            );
        });
      }

//filter cities
      if(continentList.length ===1){

        alert("00000000");

        var selectedCountries =  continentList[0].countries.filter(country => country.select === 1);
        
        if(selectedCountries.length === 1){

          cities = selectedCountries[0].cities.map((city, index) => {
          return(
            <Item key={"City" + index} id={"Country" + index} name={country.name} toggleCity={this.props.toggleCity} />
            );
          });
        }
      }

      return(
        continentList.map((continent, index) => {     
          return(
            <React.Fragment>
              <Item key={"Continent" + index} id={"Continent" + index} name={continent.name} toggleContinent={this.props.toggleContinent} />
              {countries}
              {cities}
            </React.Fragment>
          );
        })
      );
  }
}

ContinentList.propTypes = {
  continents: PropTypes.arrayOf(
    PropTypes.shape({
      select: PropTypes.Number,
      name: PropTypes.string,
      countries: PropTypes.array,
      cities: PropTypes.array
    })
  ),
  toggleContinent: PropTypes.func,
  toggleCountry: PropTypes.func,
  toggleCity: PropTypes.func,
};
