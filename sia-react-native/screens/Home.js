import React from 'react'
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'
import {
  connect, Keyboard
} from 'react-redux'
import Firebase from '../Firebase'
import {Notifications, Constants} from 'expo'
import * as Permissions from 'expo-permissions'
import {LocalNotification,PushNotification} from '../notification/Notification'


class Home extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut()
    this.props.navigation.navigate('Login')
  }
  registerForPushNotificationsAsync = async() => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    // only asks if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    // On Android, permissions are granted on app installation, so
    // `askAsync` will never prompt the user
    // Stop here if the user did not grant permissions

    if (status !== 'granted') {
      alert("Permissions not granted")
    }

    try {

    // Get the token that identifies this device
    let token = await Notifications.getExpoPushTokenAsync()
    console.log("Token: " + token)
  
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    // Firebase.database().ref('users/'+this.currentUser.uid+'/push_token').set(token)
    }
    catch(error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    await this.registerForPushNotificationsAsync()
    this.currentUser = Firebase.auth().currentUser
  }
// TODO: Pass notification object from notification file here,
// and create an object to be presented as a local notification. 
// Should at least have an ID
  sendPushNotification = () => {
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      // TODO: must set the token/recipient of notification to be self, not another device
      // TODO: token must also be saved with the record of signing up
      body: {

        // TODO: Should be able to store Token instead of hard-coding it
        to: 'ExponentPushToken[Htwd8-Oq4-3FmCyoH8OeeT]',
        sound: 'default',
        title: 'Demo',
        body: 'Demo notification'
      }
    })
  }
  render() {
    return ( <View style={styles.container}>
      <Text> Profile Screen </Text> 
      <Text> {this.props.user.email} </Text> 
      <Button title='Logout' onPress={this.handleSignout}/> 
      <Button title='Send Push Notification' onPress={() => {this.scheduleNotif()}}/>
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
