import React, {Component} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import EventCard from "./EventCard";
import { getEvents } from "./api";


const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 5,
    },
});


class EventList extends Component {
    state = {
        events: [],
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(e => ({
                ...e,
                timer: Date.now()
            })),
        });
        }, 1000);
        this.props.navigation.addListener('didFocus', () => getEvents().then( events => this.setState({ events })))
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form')
    };
    render() {
        return [
            <FlatList
                key="flatlist"
                style={styles.list}
                data = {this.state.events}
                renderItem={ ({ item, separators }) => ( <EventCard event={ item }/> ) }
                keyExtractor={item => item.id}
            />,
            <ActionButton
                key="fab"
                buttonColor="#003f5c"
                onPress={this.handleAddEvent}
            />,
        ];
    }
}

export default EventList;
