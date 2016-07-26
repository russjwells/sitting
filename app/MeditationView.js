import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Timer from './components/Timer';
import Button from './components/Button';
import MessageDisplay from './components/MessageDisplay';

class MeditationView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      num: 20,
    };
    let defaultTime = 20;
    let defaultPrepTime = 30;
  }
  handleButtonClick(){
    this.setState({'num': this.state.num+1});
    console.log("btn click handled: "+ this.state.num);
    console.log("numlog:" + this.state.num);
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
