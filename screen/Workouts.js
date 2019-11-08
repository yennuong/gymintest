import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export default class Workouts extends Component {
  static navigationOptions = {
    title: 'Workouts',
    headerStyle: {
      backgroundColor: '#081b33',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  
  render(){
    onSlidesComplete = () => {
      this.props.navigation.navigate('Details');
    }

    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
              <View style={styles.sectionContainer} >
                <Image
                  source ={require ('../images/bg_item.png')}
                  style={styles.backgroundImage}
                />
                <TouchableHighlight style={styles.fullWidthBlock} onPress={() => this.props.navigation.navigate('WorkoutDetails')}>
                  <View style ={styles.sectionContainerText}>
                    <Text style={styles.sectionType}>CARDIO</Text>
                    <Text style={styles.sectionTitle}>Starter Quick Feet</Text>
                    <Text style={styles.sectionLevel}><Text>Beginner</Text> <Text style={styles.sectionTime}>.7min</Text></Text>
                    <View style={styles.personFitness}>
                      <Image
                        source ={require ('../images/bg_item.jpg')}
                        style={styles.imageAvatar}
                      />
                      <Text style={styles.sectionName}>Jonh</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.sectionContainer} >
                <Image
                  source ={require ('../images/bg_item.png')}
                  style={styles.backgroundImage}
                />
                <TouchableHighlight style={styles.fullWidthBlock} onPress={() => this.props.navigation.navigate('WorkoutDetails')}>
                  <View style ={styles.sectionContainerText}>
                    <Text style={styles.sectionType}>CARDIO</Text>
                    <Text style={styles.sectionTitle}>Starter Quick Feet</Text>
                    <Text style={styles.sectionLevel}><Text>Beginner</Text> <Text style={styles.sectionTime}>.7min</Text></Text>
                    <View style={styles.personFitness}>
                      <Image
                        source ={require ('../images/bg_item.jpg')}
                        style={styles.imageAvatar}
                      />
                      <Text style={styles.sectionName}>Jonh</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#081b33',
  
  },
  body:{
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  sectionContainer: {
    marginBottom: 20,
    height: 184,
    position: 'relative',
    color: '#fff',
  },
  sectionContainerText:{
    padding: 19,
  },
  backgroundImage:{
    borderRadius: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.28,
    backgroundColor: '#707070',
  },
  sectionType:{
    color: '#fff',
    backgroundColor: '#ff8900',
    width: 53,
    height: 20,
    fontSize: 12,
    lineHeight: 20,
    borderRadius: 3,
    marginBottom: 10,
    textAlign: 'center',
    overflow: 'hidden',
  },

  sectionTitle: {
    fontSize: 25,
    lineHeight: 33,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  sectionLevel: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 15,
  },
  sectionTime: {
    paddingLeft: 30,
  },
  personFitness:{
    flexDirection: 'row',
  },
  imageAvatar:{
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 15
  },
  sectionName:{
    color: "#fff",
    fontWeight: '500',
    fontSize: 16,
    width: 40,
    height: 40,
  }
});