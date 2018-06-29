import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types'

import Item from './item.js';

import NestedListview, { NestedRow } from 'react-native-nested-listview';

const data = [{title: 'Node 1', items: [{title: 'Node 1.1'}, {title: 'Node 1.2'}]}]

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default class ContinentList extends React.Component {
  constructor(props) {  
      super(props);
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
            renderNode={(node, level) => (
            <NestedRow level={level}  /*style={styles.button}*/>
              <Text>{node.title}</Text>
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
