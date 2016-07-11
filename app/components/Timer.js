import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';

let timerLength = 20;

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={styles.timer}>{timerLength}</Text>
    );
  }
}
const styles = StyleSheet.create({
  timer: {
    fontSize: 80,
    fontFamily: 'AvantGarde Md BT',
    textAlign: 'center',
    color: '#A5A5A5',
    margin: 10,
    marginBottom: 60,
  },
});
export default Timer;
