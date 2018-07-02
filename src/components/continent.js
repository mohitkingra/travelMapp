import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types'

import Item from './item.js';

import NestedListview, { NestedRow } from 'react-native-nested-listview';

const data = [
  {
  title: 'Africa',
  level:0, 
  countries: [
    {
      title: 'Kenya',
      level:1,
      cities: [{
        title: 'Nairobi',
        level:2,
      }]
    }, 
    {
      title: 'Tanzania',
      level:1,
      cities: [{
        title: 'Moshi',
        level:2,
      }]
    }]
  },
  {
  title: 'Asia', 
  level: 0,
  countries: [
    {
      title: 'India',
      level:1,
      cities: [{
        title: 'New Delhi',
        level:2,
      }]
    }, 
    {
      title: 'China',
      level:1,
      cities: [{
        title: 'Shenzhen',
        level:2,
      }]
    }]
  },
  ]

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
  },
  button: {
    borderColor: 'gray',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});

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

      var continents = [];
      continents = continentList.map((continent, index) => {
        return(
          <Item key={"Continent" + index} id={"Continent" + index} name={continent.name} toggleContinent={this.props.toggleContinent} />
          );
      })    

//filter countries
      var countries = [];
      var cities = [];

      if(continentList.length === 1){
          countries = continentList[0].countries.map((country, index) => {
          return(
            <Item key={"Country" + index} id={"Country" + index} name={country.name} toggleCountry={this.props.toggleCountry} />
          );
        })
    
        var selectedCountries =  continentList[0].countries.filter(country => country.select === 1);
        
        if(selectedCountries.length === 1){
          cities = selectedCountries[0].cities.map((city, index) => {
          return(
            <Item key={"City" + index} id={"City" + index} name={city.name} toggleCity={this.props.toggleCity} />
            );
          });
          
        }
      }

      return(
        <React.Fragment>
          {continents}
          {countries}
          {cities}
        </React.Fragment>
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
