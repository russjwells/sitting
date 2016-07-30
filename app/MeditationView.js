import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
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

class MeditationView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //Begining Running Finished Paused and Resetting
      appState: "Beginning",
      timerOn: false,
      num: 20,
      defaultMinutes: 0,
      defaultSeconds: 10,
    };
  }
  componentDidMount(){

  }
  handleButtonClick(){
    this.setState({appState: stateMapper[this.state.appState]});
  }
  resetWithDefaults() {

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
  render() {
    return (
        <View style={styles.bodyarea}>
          <MessageDisplay appState={this.state.appState} />
          <Timer appState={this.state.appState} defaultMinutes={this.state.defaultMinutes} defaultSeconds={this.state.defaultSeconds} completeFunction={this.complete.bind(this)} halfwayFunction={this.halfway.bind(this)}/>
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
