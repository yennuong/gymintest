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
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import introVideo from '../images/video.mp4';

export default class WorkoutDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
    };
  }
  static navigationOptions = {
    header: null,
  };
  render(){
    return(
      <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.header}>
              <Image
                source ={require ('../images/banner.jpg')}
                style={styles.headerImage}
              />
              <TouchableHighlight style={styles.back} onPress={() => this.props.navigation.navigate('Home')}>
                <Image
                  source ={require ('../images/back.png')}
                  style={styles.back}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View style={styles.blockIntroHeader}>
                  <View style={styles.blockAvatar}>
                    <Image
                      source ={require ('../images/banner.jpg')}
                      style={styles.imagesAvatar}
                    />
                  </View>
                  <View>
                    <Text style={styles.textTpye}>Cardio</Text>
                    <Text style={styles.textLesson}>Starter Quick Feet</Text>
                    <Text style={styles.textName}>John . Beginner . 7min</Text>
                  </View>
                </View>
                <Text style={styles.sectionTitle}>Details</Text>
                <Text style={styles.line}></Text>
                <View style={styles.howWork}>
                    <Text style={styles.howWorkTitle}>Description</Text>
                    <View>
                        <Text style={styles.description}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
                        </Text>
                        <Text style={styles.description}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
                        </Text>
                        <Text style={styles.description}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s
                        </Text>
                    </View>
                </View>
                <View style={styles.blockExercise}>
                  <Text style={styles.titleExercise}>Exercise</Text>
                  <View style={styles.item}>
                    <View style={styles.blockItemImages}>
                      <Image
                        source ={require ('../images/banner.jpg')}
                        style={styles.ItemImages}
                      />
                    </View>
                    <View>
                        <Text style={styles.itemTitle}>Muscle Up</Text>
                        <Text style={styles.itemReps}>10 reps rest 45 seconds</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.blockItemImages}>
                      <Image
                        source ={require ('../images/banner.jpg')}
                        style={styles.ItemImages}
                      />
                    </View>
                    <View>
                        <Text style={styles.itemTitle}>Muscle Up</Text>
                        <Text style={styles.itemReps}>10 reps rest 45 seconds</Text>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <View style={styles.blockItemImages}>
                      <Image
                        source ={require ('../images/banner.jpg')}
                        style={styles.ItemImages}
                      />
                    </View>
                    <View>
                        <Text style={styles.itemTitle}>Muscle Up</Text>
                        <Text style={styles.itemReps}>10 reps rest 45 seconds</Text>
                    </View>
                  </View>
                </View>
              <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('DetailsItem')}>
                <Text style={styles.fullWidthButtonText}>Start workout</Text>
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
  header:{
    position: 'relative',
  },
  headerImage: {
    width: '100%',
  },
  back:{
    position: 'absolute',
    top: 20,
    left: 2,
  },

  body: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -80,
    backgroundColor: '#081b33',
    color: '#fff',
    padding: 20,
  },
  blockIntroHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  blockAvatar:{
    width: 75,
    height: 75,
    overflow: 'hidden',
    borderRadius: 50,
    marginRight: 10,
  },
  imagesAvatar:{
    width: '100%',
    height: '100%'
  },
  textTpye:{
    color: '#fff',
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom:5,
  },
  textLesson:{
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    marginBottom:5,
  },
  textName:{
    color: '#fff',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    paddingTop: 10,
    fontWeight: '700',
    marginBottom: 20,
  },
  line:{
    height: 4,
    width: 63,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  howWork:{
    color: '#fff',
    marginBottom: 30,
  },
  howWorkTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 17,
  },
  description:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 7,
  },
  howWorkDesc:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 7,
  },
  titleExercise:{
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 30,
  },
  item:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  blockItemImages:{
    width: 103,
    height: 69,
    overflow: 'hidden',
    borderRadius: 10,
    marginRight: 15,
  },
  ItemImages:{
    width: '100%',
    height: '100%'
  },
  itemTitle:{
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  itemReps:{
    color: '#fff',
    opacity: .5,
    fontWeight: '600',
  },
  fullWidthButton:{
    backgroundColor: '#fff',
    height: 57,
    borderRadius: 29,
    justifyContent: 'center',
    //position: 'absolute',                                          
    //bottom: 10,                                                    
  },
  fullWidthButtonText:{
    color: '#081b33',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "700",
  }
});