import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});

import Country from './country.js';

export default class Continent extends React.Component {
    constructor(props) {  
    super(props);

    this.state = {
      select: -1,
    }

    this.listContinent = this.listContinent.bind(this);

  }

  listContinent(){
    if(this.props.name === "Africa") {
      this.setState({
        select:0,
      })
    }
  }

  render(){
    return(
      <Country name= {this.props.name} listContinent= {this.listContinent} />
    );
  }
}