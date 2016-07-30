import React, { Component } from 'react';
import {Image, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, View} from 'react-native';

let imgURL = '.././img/multidimensionalmeditator.png';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: this.props.appState,
    };
  }

  _onPressButton() {
    console.log("You pressed the button!");
    this.props.onPress();
  }

  render() {
    let btnImg = buttonMapper[this.state.appState]
    return (
      <View style={styles.button}>
        <TouchableOpacity onPress={this._onPressButton.bind(this)} >
          <Image source={require('.././img/multidimensionalmeditator.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

var buttonMapper = {
  'Beginning' : '.././img/multidimensionalmeditator.png',
  'Running' : '.././img/standup.png',
  'Paused' : '.././img/multidimensionalmeditator.png',
  'Finished' : '.././img/complete.png',
}

const styles = StyleSheet.create({
  button: {
    bottom: 60,
  }
});

export default Button;
