import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import Icon4 from 'react-native-vector-icons/Entypo'
import Hub from './screens/Hub'
import Profile2 from './screens/Profile2'
import Notifications from './screens/Notifications'


export default createBottomTabNavigator({
  Hub: {
    screen: Hub,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="home" color={tintColor} size={24} />
      )
    }
  },
 
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarLabel: 'NOTIFICATIONS',
      tabBarIcon: ({ tintColor }) => (
        <Icon4 name="notification" color={tintColor} size={24} />
      )
    }
  },

  Profile2: {
    screen: Profile2,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon3 name="person-outline" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: '#fb5b5a',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#003f5c',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

