import React from 'react'
import * as Permissions from 'expo-permissions'
import {Notifications} from 'expo'

// LocalNotification is responsible for creating notifications
// that appear inside the application/while the application is active.

class NotificationManager extends React.Component {
    
      sendMessage = async () => {
        fetch(MESSAGE_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: this.state.messageText,
          }),
        })
        this.setState({ messageText: '' })
      }
      
      state = {
            notification: null,
            messageText: ''
          }
          //register user token 
      registerForPushNotificationsAsync = async () => {
      console.log("registering")
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
      let finalStatus = status
      
        if (status !== 'granted') {
        status = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        )
        finalStatus = existingStatus
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!')
        return
      }
      let token = await Notifications.getExpoPushTokenAsync()
      console.log("Hey! here's your token: " + token)
    
        return fetch(PUSH_REGISTRATION_ENDPOINT, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: {
                value: token,
              },
              // user: {
                // username: 'warly',
                // name: 'Dan Ward'
              // },
            }),
          })
          
        }
}
// Separate into one central class that is the parent
// the two subclasses, local and push notifications **if there is
// something that differentiates the two. If not just use one.
export default {NotificationManager}