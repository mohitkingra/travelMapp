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
        color: 'white'       
      }
  }
  
  onButtonPress = () => {

    	if(this.state.color === 'white') {
      	this.setState({
        	color: 'gray'
      	})
      }
      else {
      	this.setState({
        	color: 'white'
      	})
      }
      
      if(this.props.id.substring(0,9) === "Continent"){
          this.props.toggleContinent(this.props.name);
      }


      if(this.props.id.substring(0,7) === "Country"){
          this.props.toggleCountry(this.props.name);
      }

  }

	render(){
		return(
			<View style={[styles.button, {backgroundColor:this.state.color}]}>
        <Button
          title={this.props.name}
          onPress={this.onButtonPress}
        />
      </View>
    );
	}
}
