import React from 'react'
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native'
import {
  bindActionCreators
} from 'redux'
import {
  connect
} from 'react-redux'
import Firebase from '../Firebase'
import Backend from '../Backend.js'
import user from '../classes/user.js'
import {
  getUser
} from '../actions/user'
import {
  getEvents
} from '../actions/events'


class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getEvents()
  }
  handleSignout = () => {
    Firebase.auth().signOut()
    this.props.navigation.navigate('Login')
  }

  render() {
    return ( <View style={styles.container}>
				<Text>Profile Screen</Text>
				<Text>{this.props.auth.email}</Text>
        <Text>{this.props.auth.uid}</Text>
        <Text>{this.props.user.id}</Text>
        <Text>{this.props.user.first_name}</Text>
				<Button title='Logout' onPress={this.handleSignout} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getUser,
    getEvents
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user,
    events: state.events
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
