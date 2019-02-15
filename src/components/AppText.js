import React , {PropTypes } from "react";
import {Text , StyleSheet } from "react-native";


const AppText = ({ children, style, ...rest }) => (
  <Text  style={[styles.text, style]} {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "Weblogma_Yekan",
  }
});
export default AppText;
