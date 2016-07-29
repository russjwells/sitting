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
  componentWillReceiveProps(nextProps){

    if(this.props.appState == "Beginning"){
      this.setState({message: "Welcome to Meditation. \n Please have a seat and get comfortable."})
    }
    if(this.props.appState == "Running"){
      this.setState({message: "Mediation In Progress"})
    }
    if(this.props.appState == "Paused"){
      this.setState({message: "Mediation Paused"})
    }
    if(this.props.appState == "Finished"){
      this.setState({message: "Mediation complete."})
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
