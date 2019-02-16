import React, { Component } from "react";
import { View,  StyleSheet } from "react-native";
import CardView from "../components/CardView";
import AppText from "../components/AppText";
import EditText from "../components/EditText";
import Button from "../components/Button";

export default class ForgetPassScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            timer: 120,
        };
    }


    mainForm(props) {


   
        return (<CardView style={styles.container}>
            <AppText style={styles.logotext}>Account Recovery</AppText>
            <EditText inputType='phone-pad' hint="Please enter your phone number" style={styles.edittext} />
            <AppText style={styles.text}>Get a verification code</AppText>
            <View style={styles.row}>
            <Button
                    style={styles.button} Î
                    onPress={() => { this.setState({ step: 3 }) }}>
                    Text</Button>
                <Button
                    style={styles.button} Î
                    onPress={() => { this.setState({ step: 2 }) }}>
                    Call</Button>


            </View>
        </CardView>)
    }


    callVerifictionCode() {
        return (<CardView style={styles.container}>
            <AppText style={styles.logotext}>Account Recovery</AppText>
            <AppText style={styles.text}>This helps show that this account really belongs to you</AppText>
            <EditText inputType='phone-pad' hint="Enter the code" style={styles.edittext} />


            <Button
                style={styles.button} Î
                onPress={() => { this.setState({ step: 4 }) }}>
                NEXT</Button>
            <AppText style={styles.timer}>2:00</AppText>
            <View style={styles.row}>
                <AppText style={styles.text}>Didn't get the code?</AppText>
                <Button
                    style={styles.button} Î
                    onPress={() => { this.setState({ step: 4 }) }}>
                    RESEND IT</Button>
            </View>
        </CardView>)
    }
    textVerifictionCode() {
        return (<CardView style={styles.container}>
            <AppText style={styles.logotext}>Account Recovery</AppText>
            <AppText style={styles.text}>This helps show that this account really belongs to you</AppText>
            <EditText inputType='phone-pad' hint="Enter the code" style={styles.edittext} />
            <Button
                style={styles.button} Î
                onPress={() => { this.setState({ step: 4 }) }}>
                NEXT</Button>
            <AppText style={styles.timer}>2:00</AppText>
            <View style={styles.row}>
                <AppText style={styles.text}>Didn't get the code?</AppText>
                <Button
                    style={styles.button} Î
                    onPress={() => { this.setState({ step: 4 }) }}>
                    RESEND IT</Button>
            </View>
        </CardView>)
    }

    resetPass() {
        return (<CardView style={styles.container}>
            <AppText style={styles.logotext}>Reset Password</AppText>
            <AppText style={styles.text}>Enter a new password for your account.</AppText>

            <EditText hint="New password" style={styles.edittext} />
            <EditText hint="Retype password" style={styles.edittext} />

            <Button
                style={styles.button} Î
                onPress={() => { this.setState({ step: 3 }) }}>
                Reset Password</Button>
        </CardView>)
    }


    render() {
        {
            if (this.state.step === 1) {
                return this.mainForm();
            } else if (this.state.step === 2) {
                return this.callVerifictionCode();
            } else if (this.state.step == 3) {
                return this.textVerifictionCode();
            } else if (this.state.step == 4) {
                return this.resetPass();
            }
        }
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
        textAlign:'center',
        textAlignVertical:'center',
        marginTop: 30,
        marginRight:20,
        width: 10,
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
    row: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    logotext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#597eaa',
    },
    text: {
        textAlign: 'left',
        marginRight: 20,
        marginLeft: 20,
        fontSize: 18,
        marginTop: 20,
        color: '#597eaa', 
    }

});