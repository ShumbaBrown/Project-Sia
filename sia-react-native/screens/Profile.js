import React from 'react'
import {
  Alert,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEmail, updatePassword, login, signup } from '../actions/user'
import Backend from '../Backend.js'
import event from '../classes/event.js'
import user from '../classes/user.js'
import {
  getUser,
  updateUser,
  updateFirstName,
  updateLastName,
  updateAge,
  updateGender,
  updateClassification,
  updateMajor,
  updateInterestTags
} from '../actions/user'

class Profile extends React.Component {

  updateUser = () => {
        // this.props.login()
        this.props.updateUser(this.props.user)
        this.props.navigation.navigate('Home')
    }

  render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.user.id}</Text>
                <Text>{this.props.user.first_name}</Text>
                <Text>{this.props.user.last_name}</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.first_name}
                    onChangeText={first_name => this.props.updateFirstName(first_name)}
                    placeholder='First Name'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.last_name}
                    onChangeText={last_name => this.props.updateLastName(last_name)}
                    placeholder='Last Name'
                    autoCapitalize='none'
                />
                <TouchableOpacity style={styles.button} onPress={this.updateUser}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
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
    fontSize: 12
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
)(Profile)
