import React from 'react'
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Modal,
	TouchableOpacity
} from 'react-native'
import {
  connect
} from 'react-redux'
import Firebase from '../Firebase'
import * as Permissions from 'expo-permissions'
import Notification from '../notification/Notification'


class Home extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut()
    this.props.navigation.navigate('Login')
  }
  handleChangeText = (text) => {
    this.setState({ messageText: text })
  }

  render() {
    return ( 
    <View style={styles.Labelcontainer}>
      <View>
      <Text> Profile Screen </Text> 
      <Text> {this.props.user.email} </Text> 
      <Button title='Logout' onPress={this.handleSignout}/> 
      </View>
      <TouchableOpacity>
        <Notification></Notification>
        </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  Labelcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Textcontainer: {
    backgroundColor: '#474747',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    width: 300,
    borderColor: '#f6f6f6',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  button: {
    padding: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
  label: {
    fontSize: 18
  } 
})


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
