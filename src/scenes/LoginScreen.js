import React, { Component } from "react";
import { StyleSheet } from "react-native";
import CardView from "../components/CardView";
import AppText from "../components/AppText";
import EditText from "../components/EditText";
import Button from "../components/Button";

export default class LoginScreen extends Component {
    render() {
        return (<CardView style={styles.container}>
            <AppText style={styles.logotext}>RMInno Credential</AppText>
            <EditText hint="Username" style={styles.edittext} />
            <EditText hint="Password" style={styles.edittext} />
            
            <Button
                style={styles.button}
                onPress={() => { this.props.navigation.navigate('vendorlist') }}>
                Sign In</Button>

                <Button
                style={styles.forgetbutton}
                onPress={() => { this.props.navigation.navigate('forgetpass') }}>
                Forget Password</Button>
            
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
        marginTop:20,
        textAlign:'center',
        textAlignVertical:'center',
        width: 200,
        height: 40,
        backgroundColor: "#597eaa",
        color: 'white'
    },
    forgetbutton: {
        marginTop:20,
        width: 200,
        height: 40,
        backgroundColor: "transparent",
        color: 'black'
    },
    logotext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#597eaa',
    }

});