import React, {Component} from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from 'react-navigation-tabs';



import Challenges from './screen/Challenges';
import PushUp from './screen/PushUp';
import PushUpDetail from './screen/PushUpDetail';
import End from './screen/End';
import Chart from './screen/Chart';
import User from './screen/User';
import Workouts from './screen/Workouts';
import WorkoutDetails from './screen/WorkoutDetails';
import Login from './screen/Login';

const HomeStack = createStackNavigator({
  Login: Login,
  Home: Challenges,
  Details: PushUp,
  DetailsItem: PushUpDetail,
  End: End,
  Workouts: Workouts,
  WorkoutDetails: WorkoutDetails
  //Home: HomeScreen,
  //Details: DetailsScreen,
});
const DetailsStack = createStackNavigator({
  Chart: Chart,
});
const UserStack = createStackNavigator({
  User: User,
});



export default createAppContainer(HomeStack);