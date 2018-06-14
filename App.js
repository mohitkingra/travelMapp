import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import Svg, {G} from 'react-native-svg';

class WorldMap extends React.Component {
   constructor() {
      super()
      this.state ={
        worlddata: [],
      }
    }
  
    projection() {
      return geoMercator()
        .scale(100)
        .translate([800/2, 450/2])
    }
  
    componentDidMount() {
      fetch("http://localhost:3000/world-110m.json")
        .then(response => {
          if (response.status !== 200) {
            console.log(`There was a problem: ${response.status}`)
            return
          }
          response.json().then(worlddata => {
            this.setState({
              worlddata: feature(worlddata, worlddata.objects.countries).features,
            })
          })
        })
    }

  render() {
    return (
     <Svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
          <G className="countries">
            {
              this.state.worlddata.map((d,i) => (
                <path
                  key={ `path-${ i }` }
                  d={ geoPath().projection(this.projection())(d) }
                  className="country"
                  fill={ `rgba(38,50,56,${ 1 / this.state.worlddata.length * i})` }
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <WorldMap />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
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
