import React, { Component } from 'react';
import { FlatList, Text, TextInput, TouchableHighlight, Image, View, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Backend from "../Backend";
import {
    getEvents,
    addEvent
  } from '../actions/events'
import EventForm from "./EventForm"
import eventList from '../classes/eventList';
import event from '../classes/event'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#15202A'
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
    list: {
        height: 500,
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
    container:
    {
        flex: 1,
        backgroundColor: '#003f5c'
    },
    fieldContainer: {
        marginTop: 200,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    text: {
        height: 45,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5,
    },
    button: {
        height: 50,
        backgroundColor: '#fb5b5a',
        borderColor: '#fb5b5a',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    buttonContainer: {
        paddingTop: 20,
    }
});



class EventListFront extends Component {
    state = {
        currentEvent: new event(),
        events: new eventList(),
    };

    
    componentDidMount() {
        //this.props.navigation.addListener('didFocus', () => getEvents()
        //.then( events => this.setState({ events })))
    }
    openAlert = () => {
        alert('You can get an achievement by adding an event.');
    };

    
    buttonFunction = () => {
        this.openAlert();
        //this.handleAddEvent();
    };
    submitFunction = () => {
        this.setState({
            currentEvent:{
                ...this.state.currentEvent,
                id: Math.floor(Math.random() % 100) + 1
            }
        })

        
        this.state.events.addEvent(this.state.currentEvent)
        console.log(this.state.events.events)
    }
    updateObject = (oldObject, updatedProperties) => {
        // used to update user attributes
        return {
            ...oldObject,
            ...updatedProperties
        }
    }
    render() {
        return (
            <View>
                
                <Image
                    source={require("../assets/bisonlogo.png")}
                    resizeMode="cover"
                    style={{ width: 400, height: 700, position: 'absolute', opacity: 0.5 }}
                />
                
                <View
                    >

                    <View style={styles.fieldContainer}>
                        <TextInput style={styles.text}
                            placeholder="Event title"
                            spellCheck={false}
                            value={this.state.name}
                            onChangeText={this.handleChangeTitle, (title) => {
                                let updatedFormElement;
                                updatedFormElement = 
                                this.updateObject(this.state.currentEvent, {title: title})
                                this.setState({ currentEvent: updatedFormElement })
                                
                            }}
                        />

                        <TextInput style={styles.text}
                            placeholder="Event description"
                            spellCheck={false}
                            value={this.state.description}
                            onChangeText={this.handleChangeDescription, (desc) => {
                                let updatedFormElement;
                                updatedFormElement = this.updateObject(this.state.currentEvent, {
                                description: desc
                            })
                                this.setState({ currentEvent: updatedFormElement })
                            }}
                        />

                        <TextInput style={styles.text}
                            placeholder="Event location"
                            spellCheck={false}
                            value={this.state.location}
                            onChangeText={this.handleChangeLocation, (loc) => {
                                let updatedFormElement;
                                updatedFormElement = this.updateObject(this.state.currentEvent, {
                                location: loc
                            })
                                this.setState({ currentEvent: updatedFormElement })
                                
                            }}
                        />

                        <TextInput style={styles.text}
                            placeholder="Event start time... 5:00 PM"
                            spellCheck={false}
                            value={this.state.start_date_time}
                            onChangeText={this.handleChangeStartTime, (time) => {
                                let updatedFormElement;
                                updatedFormElement = this.updateObject(this.state.currentEvent, {
                                start_date_time: time
                            })
                                this.setState({ currentEvent: updatedFormElement })
                                
                            }}
                        />

                        <TextInput style={styles.text}
                            placeholder="Event end time... 7:00 PM"
                            spellCheck={false}
                            value={this.state.end_date_time}
                            onChangeText={this.handleChangeEndTime, (time) => {
                                let updatedFormElement;
                                updatedFormElement = this.updateObject(this.state.currentEvent, {
                                end_date_time: time
                            })
                                this.setState({ currentEvent: updatedFormElement })
                                
                            }}
                        />

                    </View>
                    <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={this.submitFunction}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Add Event</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            
            
                
            
            <View> 
                {this.state.events.events.map(event => 
                (console.log(event.title),
                <View>
                    <Text> {event.title}</Text>
                    <Text> {event.location}</Text>
                    <Text> {event.description}</Text>
                    <Text> {event.start_date_time}</Text>
                </View> ))}
                </View> 
                    
                    
                
                
                
        </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getEvents, addEvent}, dispatch)
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        user: state.user,
        events: state.events
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventListFront)

export {EventListFront};
