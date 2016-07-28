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

var bowlding = new Sound('bowlsounds.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + bowlding.getDuration() +
        'number of channels: ' + bowlding.getNumberOfChannels());
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
  handleButtonClick(){
    //Action Tree
    if (this.state.appState == "Beginning"){
      Alert.alert("Beginning")
      this.setState({appState: "Running"});
    }else if(this.state.appState == "Running"){
      Alert.alert("Running")
      this.setState({appState: "Paused"});
    }else if(this.state.appState == "Paused"){
      Alert.alert("Paused")
      this.setState({appState: "Running"});

    }else if(this.state.appState == "Finished"){
      Alert.alert("Finished")
      this.setState({appState: "Beginning"});
    }else{
      Alert.alert("What!?")
    }
    this.setState({'num': this.state.num+1});
    console.log("btn click handled: "+ this.state.num);
    console.log("numlog:" + this.state.num);
    // Play the sound with an onEnd callback
    bowlding.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }
  render() {
    return (
        <View style={styles.bodyarea}>
          <MessageDisplay />
          <Timer />
          <Button onPress={this.handleButtonClick.bind(this) }/>
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
