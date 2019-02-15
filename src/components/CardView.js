import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CardView = ({ children, style }) => (
    <View style={[styles.containerStyle, style]}>{children}</View>
);



const styles = StyleSheet.create({

    containerStyle: {
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#ffffff'

    }

});
export default CardView;