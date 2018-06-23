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

  selectCountry(country){
    if(country === "Kenya") {
      this.setState({
        select:0,
      })
    }
    else  if(country === "Tanzania") {
      this.setState({
        select:1,
      })
    }
    else  if(country === "Oceania") {
      this.setState({
        select:2,
      })
    }
    else  if(country === "Europe") {
      this.setState({
        select:3,
      })
    }
    else  if(country === "North America") {
      this.setState({
        select:4,
      })
    }
    else  if(country === "South America") {
      this.setState({
        select:5,
      })
    }
    else  if(country === "Antartica") {
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
      if(this.props.id === "Africa"){
        return(
          <React.Fragment>
            <Item id="Country" name= "Kenya" selectCountry= {this.selectCountry} />
            <Item id="Country" name= "Tanzania" selectCountry= {this.selectCountry} />
          </React.Fragment>
        );
      }
      else if(this.props.id === "Asia"){
        return(
          <React.Fragment>
            <Item id="Country" name= "India" selectCountry= {this.selectCountry} />
            <Item id="Country" name= "China" selectCountry= {this.selectCountry} />
          </React.Fragment>
        );
      }
    }
    else if(this.state.select === 0){
      return(
        <React.Fragment>
          <Item id="Country" name="Kenya" selectCountry= {this.selectCountry} />
          <City id="Kenya" />
          <Item id="Country" name="Back to Countries" selectCountry= {this.selectCountry} />
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