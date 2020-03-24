import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login.js'
import Signup from '../screens/Signup.js'
import Home from '../screens/Home.js'
import EventForm from '../screens/EventForm.js'
import EventListFront from '../screens/EventListFront.js'

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
        list: {
            screen: EventListFront
        },
        form: {
            screen: EventForm
        },
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)
