import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
//import LoginScreen from './src/scenes/LoginScreen'
import PrimaryNav from './src/navigation/PrimaryNav.js';
import PrimaryNav from './src/navigation/PrimaryNav'
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
        <View style={styles.statusbar} />
        {/* <LoginScreen/> */}
        <PrimaryNav/>
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


