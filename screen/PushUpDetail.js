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

export default class PushUpDetail extends Component {
  static navigationOptions = {
    header: null,
  };
  render(){
    return(
      <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.sectionContainer}>
                <View style={styles.header}>
                    <Image
                        source ={require ('../images/pushupdetail.png')}
                        style={styles.headerImage}
                    />
                </View>
                <View style={styles.body}>
                    <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.labelTitle}>
                            Push up
                        </Text>
                        <TouchableHighlight style={styles.labelTitleBack} onPress={() => this.props.navigation.navigate('Details')}>
                            <Text style={styles.labelTexteBack}>Back</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.sectionNumber}>
                        <Text style={styles.number}>
                                4
                        </Text>
                        <Text style={styles.labelReps}>
                            reps
                        </Text>
                    </View>
                    <TouchableHighlight style={styles.labeFinish} onPress={() => this.finishExercise()}>
                        <Text style={styles.labeFinishText}>Finish</Text>
                    </TouchableHighlight>
                    </View>
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
    position: 'absolute',
    right: 0,
  },
  headerImage: {
    width: '100%',
    width: '100%',
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  body: {
    backgroundColor: '#081b33',
    color: '#fff',
    padding: 18,
    height: '100%'
  },
  sectionTitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelTitle:{
    color: '#fff',
    fontSize: 30,
    fontWeight: '700'
  },
  labelTexteBack:{
      color: '#fff',
  },
  number: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 104,
    fontWeight: '700',
  },
  labelReps:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  labeFinish:{
    borderRadius: 29,
    backgroundColor: '#fff',
    color: '#000',
    justifyContent: 'center',
  },
  labeFinishText:{
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 23,
    paddingTop:10,
    paddingBottom:10,
  }
});