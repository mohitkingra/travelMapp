import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default class Item extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        color: 'transparent'
      }
  }
  
  onButtonPress = () => {

      if(this.props.id.substring(0,9) === "Continent"){
          this.props.toggleContinent(this.props.name);
      }


      if(this.props.id.substring(0,7) === "Country"){
          this.props.toggleCountry(this.props.name);
      }

      if(this.props.id.substring(0,4) === "City"){
          this.props.toggleCity(this.props.name);
      
          if(this.state.color === 'transparent'){
            this.setState({
              color:'gray'
            })
          }
          else{
            this.setState({
              color:'transparent'
            })
          }
      }

  }

	render(){
		return(
			<View style={[styles.button, {backgroundColor: this.props.highlight ? 'gray' : 'transparent'}]}>
        <Button
          title={this.props.name}
          onPress={this.onButtonPress}
        />
      </View>
    );
	}
}
