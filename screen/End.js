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

export default class End extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };
  render(){
    return(
      <>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.header}>
            <Image
              source ={require ('../images/pushup-banner.png')}
              style={styles.headerImage}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Push up</Text>
                <View style={styles.sectionReps}>
                    <View style={styles.block}>
                        <View style={styles.blockTime}>
                            <Text style={styles.blocklabel}>Time</Text>
                            <Text style={styles.blocknumber}>0:21</Text>
                        </View>
                    </View>
                    <View style={styles.block}>
                        <View style={styles.blockTime}>
                            <Text style={styles.blocklabel}>Reps</Text>
                            <Text style={styles.blocknumber}>0</Text>
                        </View>
                    </View>
                </View>
                <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.fullWidthButtonText}>Done</Text>
                </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
    </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#081b33',
  },
  engine: {
    //position: 'absolute',
    //right: 0,
  },
  headerImage: {
    width: '100%',
    width: '100%',
  },
  body: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -80,
    backgroundColor: '#081b33',
    color: '#fff',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    paddingTop: 10,
    paddingLeft: 18,
    fontWeight: '700',
    marginBottom: 20,
  },
  sectionReps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginLeft: -10,
    marginRight: -10,
    
  },
  block: {
    paddingLeft: 10,
    paddingRight: 10,
    width: '50%',
  },
  blockTime: {
    backgroundColor: '#15273E',
    borderRadius: 15,
    marginBottom: 15,
    paddingTop: 5,
    paddingLeft: 20,
    
    padding: 20,
  },
  blocklabel:{
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  blocknumber:{
    color: '#fff',
    fontSize: 37,
    fontWeight: '700',
  },
  fullWidthButton:{
      backgroundColor: '#fff',
      height: 57,
      borderRadius: 29,
    justifyContent: 'center',
  },
  fullWidthButtonText:{
    color: '#081b33',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "700",
  }
});