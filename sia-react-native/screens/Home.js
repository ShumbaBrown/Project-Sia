import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import SampEvents from './components/SampEvents'
import Links from './components/Links'
import Tag from './components/Tag'
const { height, width } = Dimensions.get('window')
class Home extends Component {

  /*state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };*/

  handleSeeEvents = () => {
    this.props.navigation.navigate('list')
  };

  componentWillMount() {

    this.scrollY = new Animated.Value(0)

    this.startHeaderHeight = 100
    this.endHeaderHeight = 50
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
      this.endHeaderHeight = 70 + StatusBar.currentHeight
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp'
    })

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: 'clamp'
    })
    this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [50, 30],
      extrapolate: 'clamp'
    })


  }

  render() {
    //const { search } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#15202A" }}>
          <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: '#15202A', borderBottomWidth: 1, borderBottomColor: '#38444C' }}>
            <View style={{
              flexDirection: 'row', padding: 7,
              top: 15,
              borderRadius: 10,
              backgroundColor: '#1a2733', marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              //shadowColor: 'black',
              //shadowOpacity: 0.2,
              elevation: 0,
              marginTop: Platform.OS == 'android' ? 30 : null
            }}>
              <Icon name="ios-search" color="#38444C" size={20} style={{ marginTop: 3.5, marginRight: 5, marginLeft: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search Sia"
                placeholderTextColor="#38444C"
                color="white"
                style={{ flex: 1, fontWeight: '700', backgroundColor: '#1a2733' }}
              />
            </View>

            <Animated.View
              style={{
                flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity, top: 25
              }}>
              <Tag name="Career" />
              <Tag name="Sports" />
              <Tag name="Free Food" />
              <Tag name="Student Life" />
              <Tag name="Engineering" />

            </Animated.View>
          </Animated.View>


          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                { nativeEvent: { contentOffset: { y: this.scrollY } } }
              ]
            )}>

            <View style={{ backgroundColor: "#15202A", flex: 1, paddingTop: 20, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#38444C' }}>
              <View style={styles.shadow}>
                <Text style={{ fontSize: 24, color: 'white', fontWeight: '700', paddingHorizontal: 20 }}>
                  Upcoming Events
                              </Text>

                <View style={{ height: 160, marginTop: 20 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <SampEvents imageUri={require('../assets/zumba.png')}
                      name="Zumba Fitness Block Party"
                    />
                    <SampEvents imageUri={require('../assets/resumebuilding.png')}
                      name="Resume Building Workshop"
                    />
                    <SampEvents imageUri={require('../assets/microsoft.png')}
                      name="Microsoft Info Session"
                    />
                  </ScrollView>
                </View>
              </View>


              <View style={{ marginTop: 0, paddingHorizontal: 22 }}>
                <TouchableOpacity onPress={this.handleSeeEvents}>
                  <Text style={{ color: 'white', fontWeight: '100', marginTop: 20 }}>
                    View all upcoming events

                                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ backgroundColor: "#15202A", paddingTop: 20, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#38444C', paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, color: 'white', fontWeight: '700' }}>
                School News
                                </Text>
              <Text style={{ fontWeight: '300', color: "white", marginTop: 10, marginBottom: 10 }}>
                Howard University Financial Aid Scandal Continues

                                </Text>

              <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                <Image
                  style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 10, borderWidth: 1, borderColor: '#38444C' }}
                  source={require('../assets/tyrone.png')}
                />

              </View>


              <View style={{ marginTop: 0, paddingHorizontal: 2 }}>
                <Text style={{ fontWeight: '100', color: 'white', marginTop: 20 }}>
                  View all news articles

                                  </Text>
              </View>
            </View>

            <View style={{ backgroundColor: "#15202A", paddingTop: 20, marginBottom: 40 }}>
              <Text style={{ fontSize: 24, color: 'white', fontWeight: '700', paddingHorizontal: 20 }}>
                Guide Links
                            </Text>
              <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Links width={width}
                  name="Handshake"
                />
                <Links width={width}
                  name="Campus Directory"
                />
                <Links width={width}
                  name="Athletics"
                />

                <Links width={width}
                  name="Shuttle"
                />

                <Links width={width}
                  name="Virtual Map"
                />

                <Links width={width}
                  name="ETS"
                />
                <View style={{ marginTop: 0, paddingHorizontal: 2 }}>
                  <Text style={{ fontWeight: '100', color: 'white', marginTop: 10, marginBottom: 30 }}>
                    View all links

                                  </Text>
                </View>


              </View>
            </View>
          </ScrollView>

        </View>
      </SafeAreaView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#eaeaea"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  }
});



/*import React from 'react'
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)*/




/*
           <View style={{
             flexDirection: 'row', padding: 7,
             top: 15,
             borderRadius: 10,
             backgroundColor: '#1a2733', marginHorizontal: 20,
             shadowOffset: { width: 0, height: 0 },
             //shadowColor: 'black',
             //shadowOpacity: 0.2,
             elevation: 0,
             marginTop: Platform.OS == 'android' ? 30 : null
           }}>
             <Icon name="ios-search" color="#38444C" size={20} style={{ marginTop: 3.5, marginRight: 5,  marginLeft: 10 }} />
             <TextInput
               underlineColorAndroid="transparent"
               placeholder="Search Sia"
               placeholderTextColor="#38444C"
               color= "white"
               style={{ flex: 1, fontWeight: '700', backgroundColor: '#1a2733' }}
             />
           </View>
           */

/*<SearchBar
   inputStyle={{ backgroundColor: '#1a2733' }}
   containerStyle={{ backgroundColor: '#15202A', borderWidth: 0, borderColor:'#38444C' }}
   placeholderTextColor={'#38444C'}
     placeholder="Type Here..."
     onChangeText={this.updateSearch}
     value={search}
   />*/

/*<SearchBar
              fontColor="#c6c6c6"
              iconColor="#c6c6c6"
              shadowColor="#282828"
              cancelIconColor="#c6c6c6"
              backgroundColor="#353d5e"
              placeholder="Search here"
              onChangeText={text => {
                this.filterList(text);
              }}
              onPressCancel={() => {
                this.filterList("");
              }}
              onPress={() => alert("onPress")}
            />*/
