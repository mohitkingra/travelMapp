import React from 'react';
import { Button, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import Svg, {G, Path} from 'react-native-svg';
import worlddata from './world-110m.json'; 

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
