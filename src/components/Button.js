import React, { PropTypes } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

const Button = ({ title, onPress,style, ...rest }) => (
  <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
    <Text style={[styles.text,style]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    margin: 5,
    textAlign:'center',
    fontFamily: "Weblogma_Yekan",
  },
  button: {
    justifyContent: "center",
    margin:5,
    borderRadius: 5
  }
});
export default Button;
