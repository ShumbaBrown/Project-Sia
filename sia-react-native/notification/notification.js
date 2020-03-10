import React  from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet, Animated} from 'react-native'

// Component for Local Notifications in the app. 
class Notification extends React.Component{

    
    // TODO: Finalize Animation + triggers 
    constructor(props) {
        super(props)
        this.state = {willDisplay: false}
        this.title = 'Notification Title'
        this.message = 'Notification Message'
        this.tags = []
        // Notification Types 
        const types = {
            ACHIEVEMENT: 'Achievement',
            EVENT: 'Event',
            PROFILE: 'Profile',
        }
        this.type = 'UNSET'
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
            <Button title='press' onPress={this.toggleDisplay}></Button>
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

export default Notification