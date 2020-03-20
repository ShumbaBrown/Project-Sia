import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import { StackNavigator } from 'react-navigation'

export default StackNavigator({
        list: {
            screen: EventList,
            navigationOptions: () => ({
                title: 'All Events',
            }),
        },
        form: {
            screen: EventForm,
            navigationOptions: () => ({
                title: 'Add event',
            }),
        },
    }
)
