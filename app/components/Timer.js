import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timing: false,
      hours: 0,
      minutes: 20,
      seconds: 0,
    }
  }
  componentDidMount(){

  }

  minusSecond() {

  };

  render() {
    return (
      <Text style={styles.timer}>{this.state.minutes}</Text>
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
