import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import ToggleSwitch from "toggle-switch-react-native";
import styles from './styles'

export default class App extends Component<{}> {
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false
  };

  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }

  render() {
    return (
      <View style={styles.container}>
        
        <ToggleSwitch
          label="Hello"
          isOn={this.state.isOnDefaultToggleSwitch}
          onToggle={isOnDefaultToggleSwitch => {
            this.setState({ isOnDefaultToggleSwitch });
            this.onToggle(isOnDefaultToggleSwitch);
          }}
        />
      </View>
    );
  }
}

