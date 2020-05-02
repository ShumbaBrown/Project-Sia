import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Picker,
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
  
  constructor() {
    super()
    state = {
      name: "",
      email: "",
      password: ""
    }
  }
  

  handleNextPage = () => {
    this.props.signup().then( () => {
      this.props.getUser()
    })
    this.props.navigation.navigate('Register')
  }
  render() {
    return ( 
    <View style={styles.container}>
      <View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					value={this.props.auth.email}
					onChangeText={email => this.props.updateEmail(email)}
					placeholder='Email or username'
					autoCapitalize='none'
          />
        </View>
        <View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					value={this.props.auth.password}
					onChangeText={password => this.props.updatePassword(password)}
					placeholder='Password'
					secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.buttonSignup} onPress={this.handleNextPage}>
					<Text style={styles.buttonText}>Next</Text>
				</TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center'
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
  inputText: {
    height: 50,
    
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
    fontSize: 12,
    width: "60%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
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
