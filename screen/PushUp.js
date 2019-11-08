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

export default class PushUp extends Component {
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
        <View style={styles.header}>
          <Image
            source ={require ('../images/pushup-banner.png')}
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
            <Text style={styles.sectionTitle}>Push up</Text>
            <Text style={styles.line}></Text>
            <View style={styles.howWork}>
                <Text style={styles.howWorkTitle}>How it work</Text>
                <View>
                    <Text style={styles.howWorkDesc}>- Place your phone upright against a wall, then step back 2 meters</Text>
                    <Text style={styles.howWorkDesc}>- The app tracks key points on the body using phone’s back camera</Text>
                    <Text style={styles.howWorkDesc}>- Volume up to listen realtime audio feedback</Text>
                </View>
            </View>
            <View style={styles.sectionVideo}>
              <Video 
                source={introVideo}
                ref={(ref) => {
                  this.player = ref
                }} 
                onBuffer={this.onBuffer}
                onError={this.videoError}
                style={styles.video}
                resizeMode="contain"
                repeat={true}
                playInBackground={true}
                paused={false}
                //paused={this.state.paused}
              />
            </View>
          <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('DetailsItem')}>
            <Text style={styles.fullWidthButtonText}>Start workout</Text>
          </TouchableHighlight>
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
    top: 40,
    left: 5,
  },
  body: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -80,
    backgroundColor: '#081b33',
    color: '#fff',
    padding: 20,
  },
  sectionContainer: {

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
  howWorkDesc:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 7,
  },
  sectionVideo:{
    marginBottom: 30,
    borderRadius: 15,
    overflow: 'hidden',
  },
  video: {
      width: '100%',
      height: 200,
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