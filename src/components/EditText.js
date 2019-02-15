import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet } from 'react-native';
import AppText from '../components/AppText'
export default class EditText extends Component{
  constructor(props){
    super(props);
     this.state = {
       text : ""
     }

  }
  render(){
    return(
      <View style={styles.row}>
        <AppText style={styles.label}>{this.props.hint}</AppText>
        <TextInput
        underlineColorAndroid="transparent"
        keyboardType={this.props.inputType}
        style={[styles.input,this.props.style]} 
        onChangeText={text => this.setState({ text})}
        value={this.props.text}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    fontFamily: "Weblogma_Yekan",
    textAlign: "left",
    textAlignVertical:'center',
    borderBottomColor: "#bdc3c7",
   
    paddingRight: 5,
    fontSize:16,
    paddingLeft: 5,
    borderBottomWidth: 1
  },
  row:{
    flexDirection:'row'
  },
  label:{
    color:'grey',
    paddingRight:5,
    alignSelf:'center',
    width:80,
  }
});

