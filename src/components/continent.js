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

  selectContinent(continent){
    if(continent === "Africa") {
      this.setState({
        select:0,
      })
    }
    else  if(continent === "Asia") {
      this.setState({
        select:1,
      })
    }
    else  if(continent === "Oceania") {
      this.setState({
        select:2,
      })
    }
    else  if(continent === "Europe") {
      this.setState({
        select:3,
      })
    }
    else  if(continent === "North America") {
      this.setState({
        select:4,
      })
    }
    else  if(continent === "South America") {
      this.setState({
        select:5,
      })
    }
    else  if(continent === "Antartica") {
      this.setState({
        select:6,
      })
    }
    else{
      this.setState({
        select:-1,
      })
    }
  }


  renderContinent() {
    if(this.state.select === -1){
      return(
        <React.Fragment>
          <Item id="Continent" name="Africa" selectContinent= {this.selectContinent} />
          <Item id="Continent" name="Asia" selectContinent= {this.selectContinent} />
          <Item id="Continent" name="Oceania" selectContinent= {this.selectContinent} />
          <Item id="Continent" name="Europe" selectContinent= {this.selectContinent} />
          <Item id="Continent" name="North America" selectContinent= {this.selectContinent} />
          <Item id="Continent" name="South America" selectContinent= {this.selectContinent} />
          <Item id="Continent" name="Antartica" selectContinent= {this.selectContinent} />
        </React.Fragment>
        );
    }
    else if(this.state.select === 0){
      return(
        <React.Fragment>
          <Item id="Continent" name="Africa" selectContinent= {this.selectContinent} />
          <Country id="Africa" />
          <Item id="Continent" name="Back to Continents" selectContinent= {this.selectContinent} />
        </React.Fragment>
        );
    }
    else if(this.state.select === 1){
      return(
        <React.Fragment>
          <Item id="Continent" name="Asia" selectContinent= {this.selectContinent} />
          <Country id="Asia" />
          <Item id="Continent" name="Back to Continents" selectContinent= {this.selectContinent} />
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