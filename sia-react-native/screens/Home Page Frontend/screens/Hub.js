import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    Animated
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Hub/Category'
import Home2 from './components/Hub/Home2'
import Tag from './components/Hub/Tag'
const { height, width } = Dimensions.get('window')
class Hub extends Component {

    componentWillMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
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
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: '#003f5c', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: '#465881', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" color="white" size={20} style={{ marginTop: 3.5, marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search Events"
                                placeholderTextColor="white"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: '#465881' }}
                            />
                        </View>
                        <Animated.View
                            style={{ flexDirection: 'row', marginHorizontal: 20, marginBottom: 6, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }}
                        >
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
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Upcoming Events
                            </Text>
                            
                            
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                   <TouchableOpacity>
                                    <Category imageUri={require('../assets/zumba.png')}
                                        name="Zumba Block 
                                              Party"
                                    />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <Category imageUri={require('../assets/resumebuilding.png')}
                                        name="Resume Building Workshop"
                                    />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <Category imageUri={require('../assets/microsoft.png')}
                                        name="Microsoft Info Session"
                                    />
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                    <Category imageUri={require('../assets/microsoft.png')}
                                        name="Microsoft Info Session"
                                    />
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 0, paddingHorizontal: 22 }}>
                            <TouchableOpacity>
                              <Text style={{ fontWeight: '100', marginTop: 20 }}>
                                      View all upcoming events

                                  </Text>
                             </TouchableOpacity> 
                            </View>
                            
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    School News
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                            Howard University Financial Aid Scandal Continues

                                </Text>
                                
                                <View style={{ width: width - 40, height: 200, marginTop: 10 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/tyrone.png')}
                                    />

                                </View>
                                <View style={{ marginTop: 0, paddingHorizontal: 2 }}>
                              <TouchableOpacity>
                              <Text style={{ fontWeight: '100', marginTop: 20 }}>
                                View all news articles

                                  </Text>
                              </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                        
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Guide Links
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Home2 width={width}
                                    name="Handshake"                                   
                                />
                                <Home2 width={width}
                                    name="Campus Directory"                                  
                                />
                                <Home2 width={width}
                                    name="Athletics"
                                />

                                <Home2 width={width}
                                    name="Shuttle"
                                />

                                <Home2 width={width}
                                    name="Virtual Map"
                                />

                                <Home2 width={width}
                                    name="ETS"
                                />
                                 <View style={{ marginTop: 0, paddingHorizontal: 2 }}>
                              <TouchableOpacity>
                              <Text style={{ fontWeight: '100', marginTop: 10, marginBottom:30 }}>
                                View all links

                                  </Text>
                              </TouchableOpacity>
                            </View>


                            </View>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Hub;

