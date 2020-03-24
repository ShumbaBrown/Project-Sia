import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime, addEvent } from "./Backend";



const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    text: {
        height: 40,
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
        backgroundColor: '#003f5c',
        borderColor: '#003f5c',
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
});

class EventForm extends Component {
    state = {
        name: null,
        description: null,
        location: null,
        date: '',
    };

    handleAddPress = () => {
        addEvent(this.state)
            .then(() => {
                this.props.navigation.goBack('list');
            })
    };

    handleChangeName = (value) => {
        this.setState({ name: value })
    };

    handleChangeDescription = (value) => {
        this.setState({ description: value })
    };

    handleChangeLocation = (value) => {
        this.setState({ location: value })
    };

    handleDatePress = () => {
        this.setState({ showDatePicker: true })
    };

    handleDataPicked = (date) => {
        this.setState({
            date,
        });

        this.handleDatePickerHide();
    };

    handleDatePickerHide = () => {
        this.setState({ showDatePicker: false })

    };

    render() {
        return (
            <View
                style={{ flex: 1 }}>

                <View style={styles.fieldContainer}>
                    <TextInput style={styles.text}
                        placeholder="Event title"
                        spellCheck={false}
                        value={this.state.name}
                        onChangeText={this.handleChangeName}
                    />

                    <TextInput style={styles.text}
                        placeholder="Event description"
                        spellCheck={false}
                        value={this.state.description}
                        onChangeText={this.handleChangeDescription}
                    />

                    <TextInput style={styles.text}
                        placeholder="Event location"
                        spellCheck={false}
                        value={this.state.location}
                        onChangeText={this.handleChangeLocation}
                    />

                    <TextInput style={[styles.text, styles.borderTop]}
                        placeholder="Event date"
                        spellCheck={false}
                        value={formatDateTime(this.state.date.toString())}
                        editable={!this.state.showDatePicker}
                        onFocus={this.handleDatePress}
                    />
                    <DateTimePicker
                        isVisible={this.state.showDatePicker}
                        mode="datetime"
                        onConfirm={this.handleDataPicked}
                        onCancel={this.handleDatePickerHide}
                    />

                </View>
                <TouchableHighlight
                    onPress={this.handleAddPress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );

    }
}
export default EventForm;
