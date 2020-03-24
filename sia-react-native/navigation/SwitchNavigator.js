import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login.js'
import Signup from '../screens/Signup.js'
import Home from '../screens/Home.js'
import Profile from '../screens/Profile.js'
import Register from '../screens/Register.js'

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Home: {
            screen: Home
        },
        Profile: {
            screen: Profile
        },
        Register: {
            screen: Register
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)
