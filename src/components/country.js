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
import City from './city.js';

export default class Country extends React.Component {
    constructor(props) {  
    super(props);

    this.state = {
      select: -1,
    }

    this.selectCountry = this.selectCountry.bind(this);

  }

  selectCountry(){
    if(this.props.name === "Kenya") {
      this.setState({
        select:0,
      })
    }
    else  if(this.props.name === "Tanzania") {
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
    else {
      this.setState({
        select:-1,
      })
    }
  }


  renderCountry() {
    if(this.state.select === -1){
      return(<Item id="Country" name= {this.props.name} selectCountry= {this.selectCountry} />);
    }
    else if(this.state.select === 0){
      return(
        <React.Fragment>
          <City name="Nairobi" />
          <City name="Nakuro" />
        </React.Fragment>
        );
    }
    else{
      return null;
    }
  }
  render(){
    return(this.renderCountry());
  }
}