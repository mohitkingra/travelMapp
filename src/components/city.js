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

export default class City extends React.Component {
    constructor(props) {  
    super(props);

    this.state = {
      select: -1,
    }

    this.selectCity = this.selectCity.bind(this);

  }

  selectCity(){
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
    else {
      this.setState({
        select:-1,
      })
    }
  }

  render(){

    if(this.state.select === -1){
      if(this.props.id === "Kenya"){
        return(
          <React.Fragment>
            <Item id="City" name= "Nairobi" selectCity= {this.selectCity} />
            <Item id="City" name= "Nakuru" selectCity= {this.selectCity} />
          </React.Fragment>
          );
      }
    }
  }
}