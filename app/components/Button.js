import React, { Component } from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';

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
      <TouchableWithoutFeedback onPress={this._onPressButton}>
        <Image source={require('.././img/multidimensionalmeditator.png')} />
      </TouchableWithoutFeedback>
    );
  }
}

export default Button;
