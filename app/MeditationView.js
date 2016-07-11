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
  render() {
    return (
        <View style={styles.bodyarea}>
          <MessageDisplay />
          <Timer />
          <Button  />
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
