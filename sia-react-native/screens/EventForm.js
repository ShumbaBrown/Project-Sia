import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight, TouchableWithoutFeedback,
    Keyboard, TextInput, StyleSheet
} from 'react-native';
import { addEvent } from "../Backend";
import event from "../classes/event"

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
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
        paddingTop: 200,
    }
});

class EventForm extends Component {
    state = {
        name: null,
        description: null,
        location: null,
        start_date_time: null,
        end_date_time: null,
        currentEvent: new event()
    };


    openAlert = () => {
        alert('Congrats! You got an achievement.');
    };
    buttonFunction = () => {
        this.openAlert();
        this.handleAddPress();
    };
    handleAddPress = () => {
        this.setState( {

        })
    }
    handleChangeTitle = (value) => {
        this.setState({ name: value })
    };

    handleChangeDescription = (value) => {
        this.setState({ description: value })
    };

    handleChangeLocation = (value) => {
        this.setState({ location: value })
    };

    handleChangeStartTime = (value) => {
        this.setState({ start_date_time: value })
    };

    handleChangeEndTime = (value) => {
        this.setState({ end_date_time: value })
    };
    updateObject = (oldObject, updatedProperties) => {
        // used to update user attributes
        return {
            ...oldObject,
            ...updatedProperties
        }
    }
    render() {
        return (
            <DismissKeyboard>
                <View
                    style={{ flex: 1 }}>

                    <View style={styles.fieldContainer}>
                        <TextInput style={styles.text}
                            placeholder="Event title"
                            spellCheck={false}
                            value={this.state.name}
                            onChangeText={this.handleChangeTitle, (title) => {
                                let updatedFormElement;
                                updatedFormElement = this.updateObject(this.state.currentEvent, {
                                title: title
                            })
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
                        onPress={this.buttonFunction}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Add Event</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            </DismissKeyboard>
        );

    }
}

export default EventForm;
