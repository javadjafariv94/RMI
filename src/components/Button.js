import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";


const Button = ({ title, onPress,style, ...rest }) => (
  <TouchableOpacity style={[ styles.button]} onPress={onPress}>
    <Text >{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    margin: 5,
    textAlign:'center',
    fontFamily: "Weblogma_Yekan",
  },
  button: {
 
     margin:25,

    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width:300
  }
});
export default Button;
