import React from 'react'
import {
  Alert,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Text, 
  Picker,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEmail, updatePassword, login } from '../actions/auth'
import Backend from '../Backend.js'
import event from '../classes/event.js'
import user from '../classes/user.js'
import {
  getUser
} from '../actions/user'
import {
  getEvents
} from '../actions/events'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getEvents()
  }
  handleLogin = () => {
        this.props.login().then( () => {
          this.props.getUser()
          this.props.navigation.navigate('Home')
        })
    }


  render() {
        return (
          <DismissKeyboard>
            <View style={styles.container}>
              <Image
                style={styles.Sialogo}
                source={require('../assets/sialogo.png')}
              />
            <View style={styles.inputView} >
                <TextInput
                    value={this.props.auth.email}
                    onChangeText={email => this.props.updateEmail(email)}
                    placeholder='Email'
                    placeholderTextColor="#38444C"
                    color="white"
                    autoCapitalize='none'
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    value={this.props.auth.password}
                    onChangeText={password => this.props.updatePassword(password)}
                    placeholder='Password'
                    placeholderTextColor="#38444C"
                    color="white"
                    secureTextEntry={true}
                />
            </View>
                <TouchableOpacity>
                  <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Button
                    title="Don't have an account yet? Sign up"
                    onPress={() => this.props.navigation.navigate('Signup')}
                />
            </View>
          </DismissKeyboard>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15202A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Sialogo: {
    width: 300,
    height: 300,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#1a2733",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  
  inputText: {
    height: 50,
    color: "white"
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginBottom: 20
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
  loginBtn: {
    width: "80%",
    backgroundColor: "#FF0000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  forgot: {
    marginTop: 30,
    color: "white",
    fontSize: 11
  },
  loginText: {
    color: "white"
  }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser, getEvents}, dispatch)
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
)(Login)

