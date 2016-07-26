import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import {Alert} from 'react-native';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timing: false,
      ready: true,
      paused: false,
      finished: false,
      hours: 0,
      minutes: 20,
      seconds: 20,
    }

    setInterval(() => {
      this.setState({ seconds: this.state.seconds-1 });
      console.log("seconds: "+ this.state.seconds);
    }, 1000);
  }
  componentDidMount(){
    Alert.alert("Welcome to Meditation. Please have a seat and get comfortable.")
  }

  leftPad(){

  }

  componentDidUnMount() {

  }

  minusSecond() {

  };
  start() {

  };
  stop() {

  };
  reset() {

  };

  render() {
    return (
      <Text style={styles.timer}>{this.state.minutes + ':' + this.state.seconds}</Text>
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
