import { StackNavigator } from "react-navigation";
import React, { Component } from 'react';
import LoginScreen from "../scenes/LoginScreen";
import ForgetPassScreen from "../scenes/ForgetPassScreen";
import VendorListScreen from "../scenes/VendorListScreen";
import VendorLoginScreen from "../scenes/VendorLoginScreen";


const PrimaryNav = StackNavigator({
    login: { screen: LoginScreen },
    forgetpass: { screen: ForgetPassScreen },
    vendrolist: { screen: VendorListScreen },
    vendorlogin: { screen: VendorLoginScreen },
}, {
        headerMode: 'none',
        title: 'Main',
        initialRouteName: 'login'
    })

export default PrimaryNav 