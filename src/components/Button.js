import React, { PropTypes } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

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
    // justifyContent: "center",
     margin:25,
    // borderRadius: 5
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width:300
  }
});
export default Button;
