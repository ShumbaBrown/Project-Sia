/*import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import Icon4 from 'react-native-vector-icons/Entypo'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Notifications from './screens/Notifications'
import EventListFront from './screens/EventListFront'
import News from './screens/News'



/*
const DashboardTabNavigator = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => (
				<Icon2 name="home" color={tintColor} size={24} />
			)
		}
	},

	Notifications: {
		screen: Notifications,
		navigationOptions: {
			tabBarLabel: 'NOTIFICATIONS',
			tabBarIcon: ({ tintColor }) => (
				<Icon4 name="notification" color={tintColor} size={24} />
			)
		}
	},

	Profile: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: 'PROFILE',
			tabBarIcon: ({ tintColor }) => (
				<Icon3 name="person-outline" color={tintColor} size={24} />
			)
		}
	}
}, {
	navigationOptions: ({ navigation }) => {
		const { routeName } = navigation.state.routes
		[navigation.state.index];
		return {
			headerTitle: routeName
		};
	}
},
{
	tabBarOptions: {
		activeTintColor: '#fb5b5a',
		inactiveTintColor: 'white',
		style: {
			backgroundColor: '#003f5c',
			borderTopWidth: 0,
			shadowOffset: { width: 5, height: 3 },
			shadowColor: 'black',
			shadowOpacity: 0.5,
			elevation: 5
		}
	}
});


const DashBoardStackNavigator = createStackNavigator({
	DashboardTabNavigator: DashboardTabNavigator
},{
	defaultNavigationOptions: ({navigation})=>{
		return {
			headerLeft: <Icon style={{ paddingLeft: 10}}
						onPress={ () => navigation.openDrawer()}
						 name="md-menu" 
						 size={30}/>
		};
	}
});

const AppDrawerNavigator = createDrawerNavigator({
	Dashboard: {
		screen: DashboardTabNavigator
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

*/



/*
export default createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'HOME',
			tabBarIcon: ({ tintColor }) => (
				<Icon2 name="home" color={tintColor} size={24} />
			)
		}
	},

	News: {
		screen: News,
		navigationOptions: {
			tabBarLabel: 'NEWS',
			tabBarIcon: ({ tintColor }) => (
				<Icon4 name="news" color={tintColor} size={24} />
			)
		}
	},

	Events: {
		screen: EventListFront,
		navigationOptions: {
			tabBarLabel: 'EVENTS',
			tabBarIcon: ({ tintColor }) => (
				<Icon4 name="calendar" color={tintColor} size={24} />
			)
		}
	},

	Notifications: {
		screen: Notifications,
		navigationOptions: {
			tabBarLabel: 'NOTIFICATIONS',
			tabBarIcon: ({ tintColor }) => (
				<Icon4 name="notification" color={tintColor} size={24} />
			)
		}
	},

	Profile: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: 'PROFILE',
			tabBarIcon: ({ tintColor }) => (
				<Icon name="md-person" color={tintColor} size={24} />
			)
		}
	}
}, {
	tabBarOptions: {
		//activeTintColor: '#fb5b5a',
		activeTintColor: '#FF0000',
		showLabel: false,
		inactiveTintColor: '#38444C',
		style: {
			backgroundColor: '#15202A',
			borderTopMargin: 5,
			shadowOffset: { width: 5, height: 3 },
			shadowColor: 'black',
			borderTopWidth: 1,
			borderTopColor: '#38444C',
			shadowOpacity: 0.5,
			elevation: 5
		}
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
*/



import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import SwitchNavigator from './navigation/SwitchNavigator'
import reducer from './reducers/index'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<SwitchNavigator />
			</Provider>
		)
	}
}


