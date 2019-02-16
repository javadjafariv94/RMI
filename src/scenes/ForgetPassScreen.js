import React, { Component } from "react";
import { View,  StyleSheet } from "react-native";
import CardView from "../components/CardView";
import AppText from "../components/AppText";
import EditText from "../components/EditText";
import Button from "../components/Button";

export default class ForgetPassScreen extends Component {
    render() {
        return (<CardView style={styles.container}>
            <AppText style={styles.logotext}>Account Recovery</AppText>
            <EditText inputType='phone-pad' hint="Please enter your phone number" style={styles.edittext} />
            <AppText style={styles.text}>Get a verification code</AppText>
            <View style={styles.row}>
            <Button title="Text" style={styles.button} onPress={() => { }} />
            <Button title="Call" style={styles.button} onPress={() => { }} />
            </View>
        </CardView>)
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        margin: 10,
        justifyContent: 'center'
    },
    edittext: {
        width: 200,
    },
    button: {
        marginTop: 30,
        width: 100,
        height: 40,
        backgroundColor: "#597eaa",
        color: 'white'
    },
    forgetbutton: {
        marginTop: 30,
        width: 200,
        height: 40,
        backgroundColor: "transparent",
        color: 'black'
    },
    row:{
        flexDirection:'row'
    },
    logotext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#597eaa',
    },
    text: {
        fontSize: 18,
        marginTop:20,
        color: '#597eaa',
    }

});