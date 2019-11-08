import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';


export default class User extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#081b33',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
  };
  render(){
    return(
      <View style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#081b33',
  },
  
});