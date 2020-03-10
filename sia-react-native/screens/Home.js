import React from 'react'
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native'
import {
  connect
} from 'react-redux'
import Firebase from '../Firebase'
import Backend from '../Backend.js'
import user from '../classes/user.js'
import Notification from '../notification/notification'

class Home extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut()
    this.props.navigation.navigate('Login')
  }
  render() {
    return ( <View style={styles.container}>
				<Text>Profile Screen</Text>
				<Text>{this.props.user.email}</Text>
        <Text>{this.props.user.uid}</Text>
				<Button title='Logout' onPress={this.handleSignout} />
        <TouchableOpacity>
          <Notification></Notification>
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
  }
})

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
