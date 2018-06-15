import React from 'react';
import { Button, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import Svg, {G, Path} from 'react-native-svg';

import worlddata from './world-110m.json'; 
//import countrydata from './ISO-3166.csv';

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

      //countrydata.forEach(function(country){
        //if(country.name === selectedcountryName){
        //  selectedcountryId = country.country-code;
        //}

      //});

      selectedcountryId = 356;

      worlddata.objects.countries.geometries.forEach(function(geometry){
        console.log("geometry before-----"+ geometry.id);
      });

      var temp= [];      
      temp =  worlddata.objects.countries.geometries.filter(geometry => geometry.id === selectedcountryId);

      temp.forEach(function(geometry){
        console.log("geometry after-----"+ geometry.id);
      });


    }

  render() {
    return (
     <Svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
          <G className="countries">
            {
              this.state.worlddata.map((d,i) => (
                <Path
                  key={ `path-${ i }` }
                  d={ geoPath().projection(this.projection())(d) }
                  className="country"
                  fill={ `rgba(0,0,0,${1})` }
                />
              ))
            }
          </G>
      </Svg>
    );
  }
}

class HomeScreen extends React.Component {
  constructor() {
    
    super();
    
    this.state = { 
      color: 'white'
    }
  }
  
  onButtonPress = () => {

    if(this.state.color === 'white') {
      this.setState({
        color: 'gray'
      })

      selectedcountry = "India";

    }
    else {
      this.setState({
        color: 'white'
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Select Countries</Text>
        <View style={[styles.button, {backgroundColor:this.state.color}]}>
          <Button
            title="India"
            onPress={this.onButtonPress}
          />
        </View>
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
        <Text>Your Travel Map</Text>
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
    return <RootStack />;
  }
}
