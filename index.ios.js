import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Drawer from 'react-native-drawer'

class sitting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <Image source={require('./app/img/sittingtitle.png')} />
        </View>
        <View style={styles.bodyarea}>
          <Text style={styles.meditationstatus}>
            BEGIN MEDITATION
          </Text>
          <Text style={styles.timer}>
            20:00
          </Text>
          <Image source={require('./app/img/multidimensionalmeditator.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#484848',
  },
  bodyarea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#484848',
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343434',
    height: 60,
    alignSelf: 'stretch',
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
