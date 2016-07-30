import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class MessageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      appState: this.props.appState,
    }
  }
  componentWillReceiveProps(nextProps){

  }

  render() {
    var message = messageMapper[this.props.appState];
    return (
      <Text style={styles.meditationstatus}>
        {message}
      </Text>
    );
  }
}

var messageMapper = {
  'Beginning': 'Welcome to Meditation',
  'Running': 'Meditation in Progress',
  'Paused' : 'Meditation in Progress', //Paused
  'Finished' : 'Meditation Complete',
  'Resetting' : 'Press to Reset'
};

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
