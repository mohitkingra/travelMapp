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

      this.state={
        color:'white'
      }
  }

  getChildrenName = (node) => {
    if(node.level === 0)
      return 'countries';
    else if(node.level === 1)
      return 'cities';
  }

  onNodePressed = (node) => {

    if(node.level === 2 ){

      if(this.state.color === 'white'){
         this.setState({
            color: 'gray'
          })
      }
      else{
          this.setState({
            color: 'white'
        })
    }  
  }


  }

  render(){    

      return(
        <View style={styles.container}>
          <NestedListview
            data={data}
            getChildrenName={this.getChildrenName}
            onNodePressed={this.onNodePressed}
            renderNode={(node, level) => (
            <NestedRow level={level}>
              <View style={[styles.button, {backgroundColor: this.state.color}]}>
                <Text>{node.title}</Text>
              </View>
            </NestedRow>
            )}
          />
        </View>
      );
    }
}
