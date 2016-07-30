import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Timer from './components/Timer';
import Button from './components/Button';
import MessageDisplay from './components/MessageDisplay';
var Sound = require('react-native-sound');

var singingbowlring = new Sound('singingbowlring.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + singingbowlring.getDuration() +
        'number of channels: ' + singingbowlring.getNumberOfChannels());
  }
});

let tminutes
let tseconds

class MeditationView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //Begining Running Finished Paused and Resetting
      appState: "Beginning",
      timerOn: false,
      userMinutes: 0,
      userSeconds: 10,
    };
    tminutes = this.props.defaultMinutes;
    tseconds = this.props.defaultSeconds;
  }
  componentDidMount(){

  }
  handleButtonClick(){
    this.setState({appState: stateMapper[this.state.appState]});

    if ("Beginning" == stateMapper[this.state.appState]){
      //Alert.alert("yatzee")
      //this.setState({defaultMinutes: 0, defaultSeconds: 10})
    }
  }
  componentWillReceiveProps(){

  }
  reset() {
    this.setState({appState: "Beginning"});
  }
  complete() {
    // Play the sound with an onEnd callback
    singingbowlring.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    this.setState({appState: "Finished"});
  }
  halfway() {
    singingbowlring.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    Alert.alert("Halfway!")
  }
  _onPressTime(){
    tminutes=tminutes+1;
    Alert.alert("time touched")
  }
  render() {
    return (
        <View style={styles.bodyarea}>
          <MessageDisplay appState={this.state.appState} />
          <TouchableOpacity onPress={this._onPressTime.bind(this)}>
          <Timer appState={this.state.appState} defaultMinutes={tminutes} defaultSeconds={tseconds} completeFunction={this.complete.bind(this)} halfwayFunction={this.halfway.bind(this)} resetFunction={this.reset.bind(this)} />
          </TouchableOpacity>
          <Button appState={this.state.appState} onPress={this.handleButtonClick.bind(this) }/>
        </View>
    );
  }
}

var stateMapper = {
  'Beginning' : 'Running',
  'Running' : 'Paused',
  'Paused' : 'Running',
  'Finished' : 'Beginning',
  'Resetting' : 'Beginning',

}

const styles = StyleSheet.create({
  bodyarea: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#484848',
  },
  timer: {
    fontSize: 80,
    fontFamily: 'AvantGarde Md BT',
    textAlign: 'center',
    color: '#A5A5A5',
    margin: 10,
    marginBottom: 60,
  },
  button: {
    bottom: 60,
  }
});

export default MeditationView;
