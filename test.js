import React, {Component} from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Challenges from './screen/Challenges';
import PushUp from './screen/PushUp';
import PushUpDetail from './screen/PushUpDetail';
import Chart from './screen/Chart';
import User from './screen/User';
//import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/WorkoutDetails';

const HomeStack = createStackNavigator({
  Home: Challenges,
  Details: PushUp,
  DetailsItem: PushUpDetail,
  //Home: HomeScreen,
  //Details: DetailsScreen,
});
const DetailsStack = createStackNavigator({
  Chart: Chart,
});
const UserStack = createStackNavigator({
  User: User,
});
export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      //Details: DetailsStack,
      //User: UserStack,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            return <Image source ={require ('./images/home.png')} style = {[styles.icon,{tintColor: tintColor}]} />;
          } else if (routeName === 'Details') {
            return <Image source ={require ('./images/bar-chart.png')} style = {[styles.icon,{tintColor: tintColor}]} />;
          }
          return <Image source ={require ('./images/home.png')} style = {[styles.icon,{tintColor: tintColor}]} />;
        },
      }),
      tabBarOptions: {
        visible: false,
        activeTintColor: '#ffffff',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          backgroundColor: '#081b33',
          borderTopWidth: 0,
        },
      },
    }
  )
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#081b33',
  },
});