import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types'

import Item from './item.js';

export default class ContinentList extends React.Component {
  constructor(props) {  
      super(props);
  }

  render(){    
      var continentList = this.props.continents;

      continentList = continentList.filter(continent => continent.select ===1);

      if(continentList.length === 0)
        continentList = this.props.continents;

      return(
        continentList.map((continent, index) => {     
          return(
            <Item key={"Continent" + index} id={"Continent" + index} name={continent.name} toggleContinent={this.props.toggleContinent} />
          );
        })
      );
  }
}

ContinentList.propTypes = {
  continents: PropTypes.arrayOf(
    PropTypes.shape({
      select: PropTypes.Number,
      name: PropTypes.string
    })
  ),
  toggleContinent: PropTypes.func
};
