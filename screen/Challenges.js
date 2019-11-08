import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableHighlight
} from 'react-native';
import * as firebase from "firebase";
export default class Challenges extends Component {
  constructor(props){
    super(props);
    //set the 
    var firebaseConfig = {
      apiKey: "AIzaSyApa7665bhPkRnZMphMAwn1Csxo4BwnMyY",
      authDomain: "fitlive-app.firebaseapp.com",
      databaseURL: "https://fitlive-app.firebaseio.com",
      projectId: "fitlive-app",
      storageBucket: "fitlive-app.appspot.com",
      messagingSenderId: "734697346411",
      appId: "1:734697346411:web:15c55ef3656a647f6ba82e",
      measurementId: "G-FW91LGRBLJ"
    };
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);
    if (!firebase.apps.length) {
      //firebase.initializeApp(firebaseConfig);
    }
    
  }
  writeUserData(email,fname,lname){
    firebase.database().ref('UsersList/').push({
        email,
    }).then((data)=>{
        //success callback
        console.log('data 123' , data)
    }).catch((error)=>{
        //error callback
        console.log('error 123' , error)
    })
  };
  static navigationOptions = {
    header: null,
  };
  render(){
    //this.writeUserData('email01@gmail.com')
    return(
      <>
        <View style={styles.main}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <View style={styles.header}>
              <Text style={styles.headerTitle}>Challenges</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionItem}>
                <Image
                source ={require ('../images/bg_item.png')}
                style={styles.backgroundImage}
                />
                <View style={styles.sectionContent}>
                      <Text style={styles.sectionItemTitle}>Push Up Challenge</Text>
                      <Text style={styles.sectionItemDesc}>Complete your push-ups any time and any place, as long as you meet the daily target.</Text>
                      <View style={styles.sectionTime}>
                          <View style={styles.blockMember}>
                            <Image
                              source ={require ('../images/member.png')}
                              style={styles.icon}
                            />
                            <Text style={styles.blockTime}>100</Text>
                          </View>
                          <Text style={styles.blockDays}> 10 days left</Text>
                      </View>
                      <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('Details')}>
                          <Text style={styles.fullWidthButtonText}>Join</Text>
                      </TouchableHighlight>
                  </View>
              </View>
              <View style={styles.sectionItem}>
                <Image
                source ={require ('../images/bg_item.png')}
                style={styles.backgroundImage}
                />
                <View style={styles.sectionContent}>
                      <Text style={styles.sectionItemTitle}>Workouts</Text>
                      <Text style={styles.sectionItemDesc}>Complete your push-ups any time and any place, as long as you meet the daily target.</Text>
                      <View style={styles.sectionTime}>
                          <View style={styles.blockMember}>
                            <Image
                              source ={require ('../images/member.png')}
                              style={styles.icon}
                            />
                            <Text style={styles.blockTime}>100</Text>
                          </View>
                          <Text style={styles.blockDays}> 10 days left</Text>
                      </View>
                      <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('Workouts')}>
                          <Text style={styles.fullWidthButtonText}>Join</Text>
                      </TouchableHighlight>
                  </View>
              </View>
              <View style={styles.sectionItem}>
                  <Image
                  source ={require ('../images/bg_item.png')}
                  style={styles.backgroundImage}
                  />
                  <View style={styles.sectionContent}>
                        <Text style={styles.sectionItemTitle}>Push Up Challenge</Text>
                        <Text style={styles.sectionItemDesc}>Complete your push-ups any time and any place, as long as you meet the daily target.</Text>
                        <View style={styles.sectionTime}>
                            <View style={styles.blockMember}>
                              <Image
                                source ={require ('../images/member.png')}
                                style={styles.icon}
                              />
                              <Text style={styles.blockTime}>100</Text>
                            </View>
                            <Text style={styles.blockDays}> 10 days left</Text>
                        </View>
                        <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('Details')}>
                            <Text style={styles.fullWidthButtonText}>Join</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#081b33',
  },
  main:{
    backgroundColor: '#081b33',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header:{
    //marginTop: 50,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: "#fff",
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    paddingTop: 10,
    fontWeight: '700',
    marginBottom: 20,
  },
  body:{
    paddingLeft: 20,
    paddingRight: 20,
    //marginTop: 10,
  },
  sectionItem: {
    marginBottom: 20,
    height: 200,
    width: '100%',
    position: 'relative',
    color: '#fff',
  },
  backgroundImage:{
    borderRadius: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.28,
  },
  sectionContent:{
    padding: 13,
  },
  sectionItemTitle:{
    color: '#fff',
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  sectionItemDesc:{
    color: '#fff',
    fontSize: 14,
    marginBottom: 25,
  },
  sectionTime:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  blockMember:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon:{
    marginRight: 5,
  },
  blockTime:{
    color: '#fff',
    fontSize: 12,
    opacity: 0.54
  },
  blockDays:{
    color: '#fff',
    fontSize: 12,
    opacity: 0.54
  },
  fullWidthButton:{
    borderColor: '#ff8900',
    borderWidth: 1,
    height: 35,
    borderRadius: 29,
    justifyContent: 'center',
  },
  fullWidthButtonText:{
    color: '#ff8900',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "700",
  }
});