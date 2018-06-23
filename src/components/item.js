import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';

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
  

      if(this.props.id === "Continent"){
        this.props.selectContinent(this.props.name);
      }

      if(this.props.id === "Country"){
        this.props.selectCountry(this.props.name);
      }

      if(this.props.name === "Back to Countries" || this.props.name === "Back to Continents"){
          this.setState({
            color: 'white'
          })
        }

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

