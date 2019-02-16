 import {createStackNavigator,createAppContainer } from "react-navigation";
 import LoginScreen from "../scenes/LoginScreen";
 import ForgetPassScreen from "../scenes/ForgetPassScreen";
 import VendorListScreen from "../scenes/VendorListScreen";
 import VendorLoginScreen from "../scenes/VendorLoginScreen";

//ok
const PrimaryNav1 = createStackNavigator({
    login: { screen: LoginScreen },
    forgetpass: { screen: ForgetPassScreen },
    vendorlist: { screen: VendorListScreen }, 
    vendorlogin: { screen: VendorLoginScreen },
}, {
        headerMode: 'none',
        title: 'Main',
        initialRouteName: 'login'
    })
  
      const PrimaryNav = createAppContainer(PrimaryNav1);

export default PrimaryNav; 