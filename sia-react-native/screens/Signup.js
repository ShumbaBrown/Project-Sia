import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'
import Firebase, {
  db
} from '../Firebase'
import {
  bindActionCreators
} from 'redux'
import {
  connect
} from 'react-redux'
import {
  updateEmail,
  updatePassword,
  signup
} from '../actions/auth'
import {
  getUser
} from '../actions/user'

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  }
  handleSignUp = () => {
    this.props.signup().then( () => {
      this.props.getUser()
    })
    this.props.navigation.navigate('Home')
  }

  render() {
    return ( <View style={styles.container}>
				<TextInput
					style={styles.inputBox}
					value={this.props.auth.email}
					onChangeText={email => this.props.updateEmail(email)}
					placeholder='Email'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.inputBox}
					value={this.props.auth.password}
					onChangeText={password => this.props.updatePassword(password)}
					placeholder='Password'
					secureTextEntry={true}
				/>
				<TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
					<Text style={styles.buttonText}>Signup</Text>
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
    backgroundColor: '#FFA611',
    borderColor: '#FFA611',
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
    getUser
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
)(Signup)
