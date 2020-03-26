import React, { Component } from 'react'
import {Image, View,TextInput, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import User from '../classes/user'
import RNPickerSelect from 'react-native-picker-select' 


export default class Register extends React.Component {

    // TODO: initialize User object
    // 1. import user class - DONE
    // 2. assign members of class to fields below - DONE
    // 3. save them to one(1) object when 'Finish' is pressed
    // 4. Fix inputs for for the user
    constructor(props) {
        super(props)
        this.state = {
            testUser : new User()
        }
        
    }
    addInterestTag(interest) {
        this.setState(({ interest_tags }) => ({
          interest_tags: new Set(interest_tags).add(interest)
        }));
      }
    updateObjectHelper = () => {

    }
    updateObject = (oldObject, updatedProperties) => {
        return {
            ...oldObject,
            ...updatedProperties
        }
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
                            {/* ID Input */}
                        <TextInput
                                    style={styles.inputText}
                                    placeholder='ID Number'
                                    placeholderTextColor='#34415e'
                                    autoCapitalize='none'
                                    onChangeText={(ID) => {
                                        let updatedFormElement;
                                        updatedFormElement = this.updateObject(this.state.testUser, {
                                        id: ID
                                    })
                                        this.setState({ testUser: updatedFormElement })
                                        console.log(this.state.testUser.id)
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
                                        updatedFormElement = this.updateObject(this.state.testUser, {
                                        first_name: text
                                    })
                                        this.setState({ testUser: updatedFormElement })
                                        this.props.updateFirstName(text)
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
                                        updatedFormElement = this.updateObject(this.state.testUser, {
                                        last_name: text
                                    })
                                        this.setState({ testUser: updatedFormElement })
                                        this.props.updateLastName(text)
                                    }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        {/* Previous Email Input */}
                        <Text style={styles.inputText}>{this.props.auth.email}</Text>
                    </View>
                    <View style={styles.inputView}>
                        {/* Age Input */}
                        <TextInput
                                    style={styles.inputText}
                                    placeholder='Age'
                                    placeholderTextColor='#34415e'
                                    autoCapitalize='none'
                                    keyboardType='numeric'
                                    onChangeText={(number) => {
                                        let updatedFormElement;
                                        updatedFormElement = this.updateObject(this.state.testUser, {
                                        age: number
                                    })
                                        this.setState({ testUser: updatedFormElement })
                                        this.props.updateAge(number)
                                    }}
                        />
                    </View>
                    {/* Gender Input */}
                    <View style={styles.inputView}>
                        <PickerSelect 
                        style={PickerStyle}
                        placeholder={{
                            label: 'Select your gender...',
                            value: 'null'
                        }}
                        placeholderTextColor='#34415e'
                        items={gender} 
                        onValueChange={(value) => {
                                    let updatedFormElement;
                                    updatedFormElement = this.updateObject(this.state.testUser, {
                                    gender: value
                                })
                                    this.setState({ testUser: updatedFormElement })
                                    this.props.updateGender(value)
                                }}/>
                        
                    </View>
                    <View style={styles.inputView}>
                        {/* Classification Input */}
                        <PickerSelect 
                        placeholder={{
                            label: 'Select your classification...',
                            value: 'null'
                        }}
                        style={PickerStyle}
                        placeholderTextColor=''
                        items={classification} 
                        onValueChange={(value) => {
                            let updatedFormElement;
                            updatedFormElement = this.updateObject(this.state.testUser, {
                            classification: value
                        })
                            this.setState({ testUser: updatedFormElement })
                            this.props.updateClassification(value)
                        }}>
                        </PickerSelect>
                    </View>
                    <View style={styles.inputView}>
                        {/* Major Input */}
                        <TextInput
                                    style={styles.inputText}
                                    placeholder='Major'
                                    placeholderTextColor='#34415e'
                                    autoCapitalize='none'
                                    onChangeText={(number) => {
                                        let updatedFormElement;
                                        updatedFormElement = 
                                        this.updateObject(this.state.testUser, {
                                        age: number
                                    })
                                        this.setState({ testUser: updatedFormElement })
                                        this.props.updateMajor(number)
                                    }}
                        />
                    </View>
                    <View style={styles.interestInputView}>
                        {/* Interest Input */}
                        <TextInput 
                        style={styles.interestInputText}
                        placeholder='Enter an Interest'
                        onChangeText={(item) => {this.setState({
                            mockInterest: item
                            })
                        }
                        /*Need an interest tag function 
                        to store interests to db */
                    }>
                        </TextInput>
                        <TouchableOpacity 
                        style={styles.plusImageContainer} 
                        onPress={this.addItem, this.handleClick}>
                            <Image
                            style={styles.plusImage}
                            source={require('../assets/baseline_add_black_18dp.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                    {/*new interests should be here */}
                    {/* <FlatList
                    data={books}
                    renderItem={({item}) => (
                        <Text>{item.text}</Text>
                    )
                    }/> */}
                    </View>
                    <TouchableOpacity 
                    style={styles.buttonSignup} 
                    onPress={ this.handleNextPage}>
                        <Text 
                        style={styles.buttonText}>Finish</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.buttonSignup} 
                    onPress={this.backPage}>
                        <Text 
                        style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const PickerStyle = {
    placeholderTextColor : 'blue',
    inputIOS : {
        color : 'white'
    },
    inputAndroid : {
        color: 'white'
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
        height: 60,
        color: "white"
      },
    inputView: {
        width: "85%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 60,
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
        flex: 11,
        height: 60,
        color: 'white'
      },
      plusImage: {
        height: 20,
        width: 10,
        
      },
      plusImageContainer: {
          flex: 1,
          width:10,
          resizeMode: 'contain'
      }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      updateEmail,
      updatePassword,
      signup,
      getUser,
      updateUser,
      updateFirstName,
      updateLastName,
      updateEmail,
      updateAge,
      updateGender,
      updateClassification,
      updateMajor,
      updateInterestTags
    }, dispatch)
  }
const mapStateToProps = state => {
    return {
        auth: state.auth,
        user: state.user
    }
  }
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(Register)
