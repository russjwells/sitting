import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Drawer from 'react-native-drawer'

class sitting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.meditationstatus}>
          BEGIN MEDITATION
        </Text>
        <Text style={styles.timer}>
          20:00
        </Text>
        <Text style={styles.instructions}>
          BEGIN
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#484848',
  },
  meditationstatus: {
    fontSize: 20,
    textAlign: 'center',
    color: '#A5A5A5',
    margin: 10,
  },
  timer: {
    fontSize: 50,
    textAlign: 'center',
    color: '#A5A5A5',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sitting', () => sitting);
