import React  from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native'

// Component for Local Notifications in the app. 
class Notification {
    
    // TODO: Finalize Animation 
    constructor(props) {
        this.state = {willDisplay: false, tags: []}
        this.title = 'Notification Title',
        this.message = 'Notification Message'

        // Notification Types 
        const types = {
            ACHIEVEMENT: 'Achievement',
            EVENT: 'Event',
            PROFILE: 'Profile',
        }
        let type = 'UNSET'
    }
    toggleDisplay = () => {
        this.setState({
            willDisplay: !this.state.willDisplay
        })
    }
    render() {
        
        return (
            <View>
            {this.state.willDisplay && 
                <View style={styles.NotifContainer}>
                    <Text style={[styles.TextStyles, styles.NotifTitle]}>{this.title}</Text>
                    <Text style={styles.TextStyles}>{this.message}</Text>
                </View>
            }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    NotifContainer: {
        backgroundColor: '#3A64CF',
        padding: 30,

    },
    TextStyles: {
        color: 'white'
    },
    NotifTitle: {

    },
})

export default Notification;
