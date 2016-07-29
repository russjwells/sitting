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
      if (!hideInterval){
        this.setState({ seconds: this.state.seconds-1 });
        if (this.state.seconds==0){
          if(this.state.minutes>0){
            this.setState({ minutes: this.state.minutes-1 });
            this.setState({ seconds: 59 });
          }else{
            //time ended

            this.props.completeFunction();
            complete(this);
          }
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
  componentDidUnMount() {
    this.interval = clearInterval(() => {})
  }
  componentWillReceiveProps(nextProps){
    if(this.props.appState == "Beginning"){
      reset(this)
    }
    if(this.props.appState == "Running"){
      start(this)
    }
    if(this.props.appState == "Paused"){
      pause(this)
    }
    if(this.props.appState == "Finished"){
      complete(this)
    }
  }

  render() {
    /*
    let outSec = this.state.seconds
    let outMin = this.state.minutes
    if (hideInterval){
      outSec = pausedSec;
      outMin = pausedMin;
    }
    */
    //outputSeconds = pad(this.state.seconds,2);
    return (
      //<Text style={styles.timer}>{outMin + ':' + outSec}</Text>
      <Text style={styles.timer}>{pad(this.state.minutes,2) + ':' + pad(this.state.seconds, 2)}</Text>
    );
  }
}

function pause(timer){
  hideInterval = true;
  pausedMin = timer.state.minutes;
  pausedSec = timer.state.seconds;
};
function start(timer) {
  if (hideInterval){
    hideInterval = false;
  }
};
function stop(timer) {
  hideInterval = true;
  timer.setState({minutes: 0});
  timer.setState({seconds: 0});
};
function reset(timer) {

};
function complete(timer){
  hideInterval = true;
  timer.setState({minutes: 20});
  timer.setState({seconds: 20});
}
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var hideInterval = true;
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
