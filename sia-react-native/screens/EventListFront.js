import React, { Component } from 'react';
import { FlatList, Text, Image, View, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import EventCard from "./EventCard";
import { getEvents } from "../Backend";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#15202A'
    },
    list: {
        flex: 1,
        paddingTop: 5
    },

    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },

    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
    title2: {
        fontSize: 12,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },

    title3: {
        fontSize: 12,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },

});



class EventListFront extends Component {
    state = {
        events: [],
    };

    
    componentDidMount() {
           
        this.props.navigation.addListener('didFocus', () => getEvents().then( events => this.setState({ events })))
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('Form')
    };

    openAlert = () => {
        alert('You can get an achievement by adding an event.');
    };

    buttonFunction = () => {
        this.openAlert();
        this.handleAddPress();
    };


    render() {
        return (
            <View>
                <Image
                    source={require("../assets/bisonlogo.png")}
                    resizeMode="cover"
                    style={{ width: 400, height: 700, opacity: 0.5 }}
                />
            </View>,
          
                <FlatList
                    key="flatlist"
                    style={styles.list}
                    data={this.state.events}
                    renderItem={({ item, separators }) => (<EventCard event={item} />)}
                    keyExtractor={item => item.id}
                />,
                <ActionButton
                    key="fab"
                buttonColor="#FF0000"
                    onPress={this.buttonFunction}
                />
        
        );
    }
}

export default EventListFront;




/*

const DATA = [
    {
        id: '1',
        name: 'First Item',
        description: 'Workout party',
        location: 'LKD 2019',
        start_date_time: 'April 5th, 2020/5:00PM',
        end_date_time: 'April 5h, 2020/7:00PM',
    },
    {
        id: '2',
        name: 'Second Item',
        description: 'Resume Building',
        location: 'LKD 2019',
        start_date_time: 'April 5th, 2020/5:00PM',
        end_date_time: 'April 5h, 2020/7:00PM',

    },
    {
        id: '3',
        name: 'Third Ite',
        description: 'Info session about microsoft',
        location: 'LKD 2019',
        start_date_time: 'April 5th, 2020/5:00PM',
        end_date_time: 'April 5h, 2020/7:00PM',
    },
];

function Item({ name }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{name}</Text>
        </View>
    );
}

function Item2({ description }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title2}>{description}</Text>
        </View>
    );
}

function Item3({ location }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title3}>{location}</Text>
        </View>
    );
}

function Item4({ start_date_time }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title3}>{start_date_time}</Text>
        </View>
    );
}

function Item5({ end_date_time }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title3}>{end_date_time}</Text>
        </View>
    );
}
*/

 /*
            <View>
                <Image
                    source={require("../assets/bisonlogo.png")}
                    resizeMode="cover"
                    style={{ width: 400, height: 700, opacity: 0.5 }}
                />
            </View>*/
