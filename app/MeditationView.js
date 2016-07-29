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

var threebowlring = new Sound('3bowlsounds.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + threebowlring.getDuration() +
        'number of channels: ' + threebowlring.getNumberOfChannels());
  }
});

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
      //Begining Running Finished and Paused
      appState: "Beginning",
      timerOn: false,
      num: 20,
    };
    let defaultTime = 20;
    let defaultPrepTime = 30;
  }
  componentDidMount(){
    Alert.alert("view mount state: "+this.state.appState);
  }
  handleButtonClick(){
    //Action Tree
    if (this.state.appState == "Beginning"){
      this.setState({appState: "Running"});
    }else if(this.state.appState == "Running"){
      this.setState({appState: "Paused"});
    }else if(this.state.appState == "Paused"){
      this.setState({appState: "Running"});
    }else if(this.state.appState == "Finished"){
      this.setState({appState: "Beginning"});
    }else{
      Alert.alert("What!?")
    }
  }
  mutateAppState(stateName){
    this.setState({appState: stateName})
  }
  complete() {
    // Play the sound with an onEnd callback
    threebowlring.play((success) => {
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
          <Timer appState={this.state.appState} completeFunction={this.complete.bind(this)} halfwayFunction={this.halfway.bind(this)}/>
          <Button appState={this.state.appState} onPress={this.handleButtonClick.bind(this) }/>
        </View>
    );
  }
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
