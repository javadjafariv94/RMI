import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

  import PrimaryNav from './src/navigation/PrimaryNav';
 import Ok_Screen from './src/components/Ok_Screen';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#eeeeee" }}>
        <View style={styles.statusbar} />
        <Ok_Screen/>
       
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


