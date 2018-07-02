import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types'

import Item from './item.js';

import NestedListview, { NestedRow } from 'react-native-nested-listview';

const data = [
  {
  title: 'Africa',
  level:0, 
  items: [
    {
      title: 'Kenya',
      level:1,
      items: [{
        title: 'Nairobi',
        level:2,
      }]
    }, 
    {
      title: 'Tanzania',
      level:1,
      items: [{
        title: 'Moshi',
        level:2,
      }]
    }]
  },
  {
  title: 'Asia', 
  level: 0,
  items: [
    {
      title: 'India',
      level:1,
      items: [{
        title: 'New Delhi',
        level:2,
      }]
    }, 
    {
      title: 'China',
      level:1,
      items: [{
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
      //var continentList = this.props.continents;

      //continentList = continentList.filter(continent => continent.select ===1);

      //if(continentList.length === 0)
      //  continentList = this.props.continents;

      return(
        <View style={styles.container}>
          <NestedListview
            data={data}
            getChildrenName={(node) => 'items'}
            onNodePressed={this.onNodePressed}
            renderNode={(node, level) => (
            <NestedRow level={level}>
              <View style={[styles.button, {backgroundColor: this.state.color, paddingLeft: (level + 1)*30}]}>
                <Text>{node.title}</Text>
              </View>
            </NestedRow>
            )}
          />
        </View>
      );
    }
}

//ContinentList.propTypes = {
//  continents: PropTypes.arrayOf(
//    PropTypes.shape({
//      select: PropTypes.Number,
//      name: PropTypes.string
//    })
//  ),
//  toggleContinent: PropTypes.func
//};
