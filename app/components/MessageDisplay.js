import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class MessageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to Meditation. \n Please have a seat and get comfortable.",
    }
  }

  render() {
    return (
      <Text style={styles.meditationstatus}>
        {this.state.message}
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  meditationstatus: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'AvantGarde Md BT',
    color: '#A5A5A5',
    margin: 10,
    top: 60,
  },
});

export default MessageDisplay;
