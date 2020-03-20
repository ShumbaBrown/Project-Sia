import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView, 
  ScrollView,
  TouchableOpacity
} from 'react-native';
import styles from './styles'

export default class Profile2 extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
              <View style={styles.header}></View>
              <Image style={styles.avatar} source={require('../assets/chadwick.png')}/>
              <View style={styles.body}>
                <View style={styles.bodyContent}>
                  <Text style={styles.name}>John Doe</Text>
                  <Text style={styles.id}>@02819672</Text>
                  <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { }}>
                       <Image style={styles.achievement} source={require('../assets/target.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                    <Image style={styles.achievement} source={require('../assets/win.png')}/>
                        
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Image style={styles.achievement} source={require('../assets/growth.png')}/>
                    </TouchableOpacity>
            </View>
        </View>
        
                  
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style = {styles.buttonText}> Notifications </Text>
                   
                  </TouchableOpacity>              
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style = {styles.buttonText}> Your Events </Text>
                    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style = {styles.buttonText}> Feedback </Text>
                   
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style = {styles.buttonText}> Privacy Policy </Text>
                     
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style = {styles.buttonText}> Logout </Text> 
                  </TouchableOpacity>
                </View> 
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
    
    );
  }
}




