import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import {Alert} from 'react-native';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Beginning Running Finished Paused
      appState: this.props.appState,
      hours: 0,
      minutes: 0,
      seconds: 7,
    }
  }
  componentDidMount(){
    this.interval = setInterval(() => {
      if (!paused){
        this.setState({ seconds: this.state.seconds-1 });
        if (this.state.seconds<=0){
          if(this.state.minutes>0){
            this.setState({ minutes: this.state.minutes-1 });
            this.setState({ seconds: 59 });
          }else{
            //time ended
            this.props.completeFunction();
          }
        }
      }else{

      }
      console.log("| "+this.props.appState)
    }, 1000);
  }
  componentDidUnMount() {
    this.interval = clearInterval(() => {})
  }
  componentWillReceiveProps(nextProps){
    if(this.props.appState == "Beginning"){
      //reset(this)
      start(this)
      //Alert.alert("beg prop recieved by timer")
    }
    if(this.props.appState == "Running"){
      //start(this)
    }
    if(this.props.appState == "Paused"){
      pause(this)
    }
    if(this.props.appState == "Finished"){
      complete(this)
    }
  }
  render() {
    return (
      <Text style={styles.timer}>{pad(this.state.minutes,2) + ':' + pad(this.state.seconds, 2)}</Text>
    );
  }
}

function pause(timer){
  paused = true;
  pausedMin = timer.state.minutes;
  pausedSec = timer.state.seconds;
};
function start(timer) {
  paused = false;
};
function stop(timer) {
  paused = true;
  timer.setState({minutes: 0});
  timer.setState({seconds: 0});
};
function reset(timer) {
  timer.setState({
    hours: 0,
    minutes: 20,
    seconds: 0,
  })
};
function complete(timer){
  paused = true;
  //timer.setState({minutes: 0});
  //timer.setState({seconds: 0});
}
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var paused = true;
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
