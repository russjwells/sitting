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
    setInterval(() => {
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

  componentDidMount(){
    
  }
  pause(){

  }
  finish(){
    this.setState({ finished: true });
    this.setState({ timing: false });
    clearInterval(() => {

    })
  }

  leftPad(){

  }

  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
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

  render(pad) {
    let outputSeconds
    //outputSeconds = pad(this.state.seconds,2);
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
