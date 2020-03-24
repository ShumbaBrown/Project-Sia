import React, { Component } from 'react'
import {Image, View,TextInput, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import User from '../classes/user'
import RNPickerSelect from 'react-native-picker-select' 


export default class Register extends React.Component {

    // TODO: initialize User object
    // 1. import user class - DONE
    // 2. assign members of class to fields below
    // 3. save them to one(1) object when 'Finish' is pressed
    // 4. Fix inputs for for the user
    constructor(props) {
        super(props)
        this.state = {
             mockUser: {
                id: "",
                first_name: "",
                last_name: "",
                email: "",
                age: 0,
                gender: "None",
                classification: "",
                major: "",
                interest_tags: new Set()
            },
        }
        
    }
    updateObject = (oldObject, updatedProperties) => {
        return {
            ...oldObject,
            ...updatedProperties
        }
    }
    setUser = () => {
        // Create new User object and set it to local object
        newUser = new User()
        newUser.setID(this.state.mockUser.id)
        newUser.setFirstName(this.state.mockUser.first_name)
        newUser.setLastName(this.state.mockUser.last_name)
        newUser.setEmail(this.state.mockUser.email)
        newUser.setGender(this.state.mockUser.gender)
        
    }
    render() {
        var gender = [
            {label: 'Female', value: "female"},
            {label: 'Male', value: "male" },
            {label: 'Non-binary', value: "non-binary"},
            {label: 'Gender Non-conforming', value: "gender non-conforming"},
            {label: 'Not listed', value: "Not listed"}
          ]
        var classification = [
            {label: 'Freshman/First Year', value: 'freshman'},
            {label: 'Sophomore/Second Year', value: 'sophomore'},
            {label: 'Junior/Third Year', value: 'junior'},
            {label: 'Senior/Fourth Year', value: 'senior'}
        ]
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Enter your information below:</Text>
                        </View>
                        <View style={styles.inputView}>
                        <TextInput
                                    style={styles.inputText}
                                    placeholder='ID Number'
                                    placeholderTextColor='#34415e'
                                    autoCapitalize='none'
                                    onChangeText={(ID) => {
                                        let updatedFormElement;
                                        updatedFormElement = this.updateObject(this.state.mockUser, {
                                        id: ID
                                    })
                                        this.setState({ mockUser: updatedFormElement })
                                    }}
                                    secureTextEntry={true}
                                    
                        />
                        
                    </View>
                    <View style={styles.inputView}>

                        <TextInput
                                    style={styles.inputText}
                                    placeholder='First Name'
                                    placeholderTextColor='#34415e'
                                    autoCapitalize='none'
                                    onChangeText={(text) => {
                                        let updatedFormElement;
                                        updatedFormElement = this.updateObject(this.state.mockUser, {
                                        first_name: text
                                    })
                                        this.setState({ mockUser: updatedFormElement })
                                    }}    
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                                    style={styles.inputText}
                                    placeholder='Last Name'
                                    placeholderTextColor='#34415e'
                                    autoCapitalize='none'
                                    onChangeText={(text) => {
                                        let updatedFormElement;
                                        updatedFormElement = this.updateObject(this.state.mockUser, {
                                        last_name: text
                                    })
                                        this.setState({ mockUser: updatedFormElement })
                                    }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                                    style={styles.inputText}
                                    placeholder='Email'
                                    placeholderTextColor='#34415e'
                                    autoCapitalize='none'
                                    onChangeText={(text) => {
                                        let updatedFormElement;
                                        updatedFormElement = this.updateObject(
                                            this.state.mockUser, {email: text}
                                            )
                                        this.setState({ mockUser: updatedFormElement })
                                    }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                                    style={styles.inputText}
                                    placeholder='Age'
                                    placeholderTextColor='#34415e'
                                    autoCapitalize='none'
                                    keyboardType='numeric'
                                    onChangeText={(number) => {
                                        let updatedFormElement;
                                        updatedFormElement = this.updateObject(this.state.mockUser, {
                                        age: number
                                    })
                                        this.setState({ mockUser: updatedFormElement })
                                    }}
                        />
                    </View>
                    {/*radio selection for gender? */}
                    <View style={styles.inputView}>
                        <RNPickerSelect 
                        placeholder={{
                            label: 'Select your gender...',
                            value: 'null'
                        }}
                        placeholderTextColor='#34415e'
                        items={gender} 
                        onValueChange={(value) => {
                                    let updatedFormElement;
                                    updatedFormElement = this.updateObject(this.state.mockUser, {
                                    gender: value
                                })
                                    this.setState({ mockUser: updatedFormElement })
                                    
                                }}>
                        </RNPickerSelect>
                    </View>
                    <View style={styles.inputView}>
                        <RNPickerSelect 
                        placeholder={{
                            label: 'Select your classification...',
                            value: 'null'
                        }}
                        placeholderTextColor=''
                        items={classification} 
                        onValueChange={(value) => {
                            let updatedFormElement;
                            updatedFormElement = this.updateObject(this.state.mockUser, {
                            classification: value
                        })
                            this.setState({ mockUser: updatedFormElement })
                            console.log(this.state.mockUser.classification)
                        }}>
                        </RNPickerSelect>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                                    style={styles.inputText}
                                    placeholder='Major'
                                    placeholderTextColor='#34415e'
                                    autoCapitalize='none'
                                    onChangeText={(number) => {
                                        let updatedFormElement;
                                        updatedFormElement = 
                                        this.updateObject(this.state.mockUser, {
                                        age: number
                                    })
                                        this.setState({ mockUser: updatedFormElement })
                                    }}
                        />
                    </View>
                    <View style={styles.interestInputView}>
                        <TextInput 
                        style={styles.interestInputText}
                        placeholder='Enter an Interest'
                        multiline={true}>
                        </TextInput>
                        <Image
                        style={styles.plusImage}
                        source={require('../assets/baseline_add_black_18dp.png')}/>
                    </View>
                    <View>
                    
                    </View>
                    
                    {/*enter interests, save to list */}
                    <TouchableOpacity style={styles.buttonSignup} onPress={this.handleSignUp, this.setUser}>
                        <TextInput 
                        style={styles.buttonText}
                        >Finish</TextInput>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
      },
      buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
      },
      buttonSignup: {
        fontSize: 12,
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
      },
    container: {
        backgroundColor: '#003f5c',
        flex: 1,
        alignItems: 'center'
    },
    inputText: {
        flex: 2,
        height: 50,
        color: "white"
      },
    inputView: {
        width: "85%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
      },
      title: {
          padding: 50,
          borderColor: 'white',
          alignItems: 'center'
      },
      titleText: {
          fontSize: 20,
          margin: 10,
          color: 'white'
      },
      radioGroup: {
          margin: 20
      },
      radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        color: 'white'
      },
      pickerSelect: {
            height: 10
      },
      interestInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "85%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
      },
      interestInputText: {
        flex: 1,
        width: '80%',
        marginRight: 230
      },
      plusImage: {
        flex: 1,
        height: 20,
        width: 10,
        resizeMode: 'contain'
      }
})

