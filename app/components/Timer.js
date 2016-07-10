import React, { Component } from 'react';
import {Text} from 'react-native';

let timerLength = 20;

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text>{timerLength}</Text>
    );
  }
}

export default Timer;
