import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import event from '../classes/event.js'
import { formatDate } from './Backend';


export default function EventCard({ event }) {
   

    return (
        <TouchableHighlight>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>{event.name}</Text>
                    <Text style={styles.title2}>{event.description}</Text>
                    <Text style={styles.title3}>{event.location}</Text>
                    <Text style={styles.date}>{formatDate(event.date)}</Text>
                </View>
                
            </View>
        </TouchableHighlight>
    );
}

EventCard.propTypes = {
    event: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date)
    }),
};

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
