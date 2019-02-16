import React from 'react';
import {  View, StyleSheet }   from 'react-native';

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
     
        backgroundColor: '#ffffff'

    }

});
export default CardView;