import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginScreen from './src/scenes/LoginScreen'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
        <View style={styles.statusbar} />
        <LoginScreen/>
      </View>
    );
  }
}
console.disableYellowBox = true;
const styles = StyleSheet.create({
  statusbar: {
    height: Platform.OS === 'ios' ? 20 : 0,
  }
});


