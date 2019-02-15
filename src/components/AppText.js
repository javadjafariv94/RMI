import React from "react";
import {Text , StyleSheet } from "react-native";

//????????????????

// const AppText = ({ children, style, ...rest }) => (
//   <Text  style={[styles.text, style]} {...rest}>
//     {children}
//   </Text>
// );

const AppText = ({ children,style}) => (
  <Text style={[styles.text,style]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "Weblogma_Yekan",
  }
});
export default AppText;
