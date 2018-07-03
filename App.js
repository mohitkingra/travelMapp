import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import continentReducer from './src/reducers/index.js';
let store = createStore(combineReducers({continentReducer}));

//import * as d3 from "d3";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import Svg, {G, Path} from 'react-native-svg';
import worlddata from './world-110m.json'; 

import ContinentList  from './src/containers/continent.js';

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

/*
class WorldPack extends React.Component {
  constructor() {
      super()
  }
  
  componentDidMount() {

    var svg = d3.select("svg"),
      margin = 20,
      diameter = +svg.attr("width"),
      g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")"

    var color = d3.scaleLinear()
      .domain([-1, 5])
      .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
      .interpolate(d3.interpolateHcl);

    var pack = d3.pack()
      .size([diameter - margin, diameter - margin])
      .padding(2);

  }

  render() {
    return (
      <Svg width={800} height={450} viewBox="0 0 800 450">
      </Svg>
    );
  }
}
*/

class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Button
            title="Where have you been?"
            onPress={()=> null}
        />
        <ContinentList />        
        <Button
            title="Show my Travels"
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