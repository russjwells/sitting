import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import {Alert} from 'react-native';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Beginning Running Finished Paused
      appState: "",
      hours: 0,
      minutes: 20,
      seconds: 20,
    }
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds-1 });
      if (this.state.seconds==0){
        if(this.state.minutes>0){
          this.setState({ minutes: this.state.minutes-1 });
          this.setState({ seconds: 59 });
        }else{
          finish();
        }
      }
    }, 1000);
  }
  reset(){
    setState({
      hours: 0,
      minutes: 20,
      seconds: 0,
    })
  }
  start(){

  }
  pause(){

  }
  finish(){
    this.setState({ finished: true });
    this.setState({ timing: false });

  }

  leftPad(){

  }

  componentDidUnMount() {
    this.interval = clearInterval(() => {

    })
  }
  componentWillReceiveProps(nextProps){
    if(this.props.appState == "Beginning"){
      reset()
    }
    if(this.props.appState == "Running"){
      start()
    }
    if(this.props.appState == "Paused"){
      pause()
    }
    if(this.props.appState == "Finished"){
      finish()
    }
  }

  render() {
    let outSec = this.state.seconds
    let outMin = this.state.minutes
    if (isPaused){
      outSec = pausedSec;
      outMin = pausedMin;
    }
    //outputSeconds = pad(this.state.seconds,2);
    return (
      //<Text style={styles.timer}>{outMin + ':' + outSec}</Text>
      <Text style={styles.timer}>{this.state.minutes + ':' + pad(this.state.seconds, 2)}</Text>
    );
  }
}

function pause(){
  isPaused = true;
  pausedMin = this.getState({minutes});
  pausedSec = this.getState({seconds});
};
function start() {
  if (isPaused){
    isPaused = false;
  }
};
function stop() {

};
function reset() {

};
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var isPaused = true;
var pausedMin;
var pausedSec;
var timerMapper = {
  'Beginning': 'Welcome to Meditation',
  'Running': 'Meditation in Progress',
  'Paused' : 'Meditation Paused',
  'Finished' : 'Meditation Complete',
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
