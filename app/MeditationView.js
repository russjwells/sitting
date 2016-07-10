import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Timer from './components/Timer';
import Button from './components/Button';

class MeditationView extends Component {
  render() {
    return (
        <View style={styles.bodyarea}>
          <Text style={styles.meditationstatus}>
            BEGIN MEDITATION
          </Text>
          <Text style={styles.timer}>
            <Timer />
          </Text>
          <View style={styles.button}>
            <Button  />
          </View>
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
  meditationstatus: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'AvantGarde Md BT',
    color: '#A5A5A5',
    margin: 10,
    top: 60,
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
