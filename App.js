import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 

import continentReducers from './src/reducers/continent.js';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(combineReducers({continentReducers}));

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import Svg, {G, Path} from 'react-native-svg';
import worlddata from './world-110m.json'; 

import Continent from './src/components/continent.js';

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

var selectedcountryName;
var selectedcountryId;
var arr;

class WorldMap extends React.Component {
   constructor() {
      super()
      this.state ={
        worlddata: [],
      }
    }
  
    projection() {
      return geoMercator()
        .scale(60)
        .translate([800/2, 450/2])
    }
  
    componentDidMount() {

      this.setState({
        worlddata: feature(worlddata, worlddata.objects.countries).features,
      })

      arr = [];
      var index=0;
      worlddata.objects.countries.geometries.forEach(function(geometry) {

        if(geometry.id == selectedcountryId) {
          // Update fillstyle
          arr[index]=1
        }
        else {
          arr[index] =0;
        }

        index++;

    });
  
    }

  render() {

    return (
     <Svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
          <G className="countries">
            {
              this.state.worlddata.map((d,i) => (
                <Path
                  className="country"
                  stroke="gray" 
                  stroke-width="2"
                  fill={ arr[i] ? 'black' : 'none' }
                  key={ `path-${ i }` }
                  d={ geoPath().projection(this.projection())(d) }
                />
              ))
            }
          </G>
      </Svg>
    );
  }
}

class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Button
            title="Build Travel Map"
            onPress={()=> null}
        />
        <Continent name="Africa" />
        <Continent name="Asia" />
        <Continent name="Oceania" />
        <Continent name="Europe" />
        <Continent name="North America" />
        <Continent name="South America" />
        <Continent name="Antartica" />        
        <Button
            title="Show Travel Map"
            onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Your Travel Map"
          onPress={() => null}
        />        
        <WorldMap />
        <Button
          title="Back"
          onPress={() => this.props.navigation.navigate('Home')}
        />
       </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
      return(
        <Provider store={store}>
          <RootStack />
        </Provider>
      );
  }
}
