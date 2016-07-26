import React, { Component } from 'react';
import {Image, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, View} from 'react-native';

let imgURL = '.././img/multidimensionalmeditator.png';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
    };
  }

  _onPressButton() {
    console.log("You pressed the button!");
    this.props.onPress();

  }
  _onReleaseButton() {
    console.log("You released the button!");
  }

  render() {
    return (
      <View style={styles.button}>
        <TouchableOpacity onPress={this._onPressButton.bind(this)} onRelease={this._onReleaseButton}>
          <Image source={require('.././img/multidimensionalmeditator.png')} />
        </TouchableOpacity>
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
