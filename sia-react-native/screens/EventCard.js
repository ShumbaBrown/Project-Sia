import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';




const styles = StyleSheet.create({
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
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    date: {
        fontWeight: '200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '30%',
        textAlign: 'right',
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


export default function EventCard({ event }) {


    return (
        <TouchableHighlight>
            
            <View style={styles.card}>
            <Text>{console.log("Here's an event" + {event})};
            </Text>
                <View style={styles.cardHeader}>

                    <Text style={styles.title}>Here's the event name: {event.name}</Text>
                    <Text style={styles.title2}>{event.description}</Text>
                    <Text style={styles.title3}>{event.location}</Text>
                    <Text style={styles.title3}>{event.start_date_time}</Text>
                    <Text style={styles.title3}>{event.end_date_time}</Text>

                </View>


            </View>
        </TouchableHighlight>
    );
}

EventCard.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        start_date_time: PropTypes.string.isRequired,
        end_date_time: PropTypes.string.isRequired,
    }),
};
