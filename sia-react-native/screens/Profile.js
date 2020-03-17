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
<<<<<<< HEAD
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
  goBack = () => {

    this.props.navigation.navigate('Register')
  }
  updateUser = () => {
        // this.props.login()
        this.props.updateUser(this.props.user)
=======
import { updateEmail, updatePassword, login } from '../actions/user'
import Backend from '../Backend.js'
import event from '../classes/event.js'
import user from '../classes/user.js'

class Profile extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleLogin = () => {
        this.props.login()
>>>>>>> Adding support for user in state
        this.props.navigation.navigate('Home')
    }

  render() {
        return (
            <View style={styles.container}>
<<<<<<< HEAD
                <Text>{this.props.user.id}</Text>
                <Text>{this.props.user.first_name}</Text>
                <Text>{this.props.user.last_name}</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.first_name}
                    onChangeText={first_name => this.props.updateFirstName(first_name)}
                    placeholder='First Name'
=======
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.email}
                    onChangeText={email => this.props.updateEmail(email)}
                    placeholder='Email'
>>>>>>> Adding support for user in state
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
<<<<<<< HEAD
                    value={this.props.user.last_name}
                    onChangeText={last_name => this.props.updateLastName(last_name)}
                    placeholder='Last Name'
                    autoCapitalize='none'
                />
                <TouchableOpacity style={styles.button} onPress={this.updateUser}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.goBack}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
=======
                    value={this.props.user.password}
                    onChangeText={password => this.props.updatePassword(password)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Button
                    title="Don't have an account yet? Sign up"
                    onPress={() => this.props.navigation.navigate('Signup')}
                />
>>>>>>> Adding support for user in state
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
<<<<<<< HEAD
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
=======
    return bindActionCreators({ updateEmail, updatePassword, login }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
>>>>>>> Adding support for user in state
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
