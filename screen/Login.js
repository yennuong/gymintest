import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';
import { handleFbLogin } from '../src/lib/auth/index';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  static navigationOptions = {
    header: null,
  };
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.titleIput}>Email</Text>
          <TextInput style={styles.inputs}
              placeholder="Email"
              placeholderTextColor = "#657180"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({email})}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleIput}>Password</Text>
          <TextInput style={styles.inputs}
              placeholder="Password"
              placeholderTextColor = "#657180"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={handleFbLogin}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginFacebook]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.signupText}>Sign up with Facebook</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#081b33',
  },
  somePlaceholderStyle:{
      color:'red',
  },
  inputContainer: {
      color: '#fff',
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      width:300,
      marginBottom:15,
      flexDirection: 'column',
  },
  titleIput:{
    color:'#fff',
    fontSize: 16,
    marginBottom: 0,
    fontWeight: '600',
  },
  inputs:{
    height:45,
    borderBottomColor: '#FFFFFF',
    color: '#fff',
    fontWeight: '500',
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:57,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width: 300,
    borderRadius:30,
    borderRadius: 29,

  },
  signupButton: {
    marginTop: 30,
    backgroundColor: "#ff8900",
  },
  loginFacebook:{
    backgroundColor: "#3f63ba",
  },
  signupText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  }
});