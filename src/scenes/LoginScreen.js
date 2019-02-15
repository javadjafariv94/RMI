import React,{Component} from "react";
import {StyleSheet} from "react-native";
import AppText from '../components/AppText';
import EditText from '../components/EditText';
import CardView from '../components/CardView';
import Button from "../components/Button";

export default class LoginScreen extends Component {

    render(){
        return (<CardView style={styles.container}>
                         <AppText style={styles.logotext}>RMInno Credential</AppText>
                         <EditText hint="Username" style={styles.edittext} />
                         <EditText hint="Password" style={styles.edittext} />
                         <Button title="Sign In" style={styles.button} onPress={() => { }} />
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
        width: 200,
        height: 40,
        backgroundColor: "#597eaa",
        color: 'white'
    },
    logotext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#597eaa',
    }

});