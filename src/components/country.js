import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default class Country extends React.Component {
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

    	}
    	else {
      	this.setState({
        	color: 'white'
      	})
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

