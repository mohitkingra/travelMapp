import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});

import Item from './item.js';
import Country from './country.js';

export default class Continent extends React.Component {
    constructor(props) {  
    super(props);

    this.state = {
      select: -1,
    }

    this.selectContinent = this.selectContinent.bind(this);

  }

  selectContinent(){
    if(this.props.name === "Africa") {
      this.setState({
        select:0,
      })
    }
    else  if(this.props.name === "Asia") {
      this.setState({
        select:1,
      })
    }
    else  if(this.props.name === "Oceania") {
      this.setState({
        select:2,
      })
    }
    else  if(this.props.name === "Europe") {
      this.setState({
        select:3,
      })
    }
    else  if(this.props.name === "North America") {
      this.setState({
        select:4,
      })
    }
    else  if(this.props.name === "South America") {
      this.setState({
        select:5,
      })
    }
    else  if(this.props.name === "Antartica") {
      this.setState({
        select:6,
      })
    }
  }


  renderContinent() {
    if(this.state.select === -1){
      return(<Item id="Continent" name= {this.props.name} selectContinent= {this.selectContinent} />);
    }
    else if(this.state.select === 0){
      return(
        <React.Fragment>
          <Country name="Kenya" />
          <Country name="Tanzania" />
        </React.Fragment>
        );
    }
    else{
      return null;
    }
  }

  render(){
    return(this.renderContinent());
  }
}