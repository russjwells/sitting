import React, { Component } from 'react';
import {Image, TouchableWithoutFeedback, StyleSheet, View} from 'react-native';

let timerLength = 20;

let imgURL = '.././img/multidimensionalmeditator.png';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPressButton() {
    console.log("You tapped the button!");
  }

  render() {
    return (
      <View style={styles.button}>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <Image source={require('.././img/multidimensionalmeditator.png')} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    bottom: 60,
  }
});

export default Button;
