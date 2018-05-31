import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
// Styles
import styles from './Styles/LaunchScreenStyles'

// Screem
import Profile from './Profile'

// import * as actions from '../Redux/Auth'
import setState from '../Redux/Auth'

export default class SignUp extends Component {
  openProfile = () => {
    this.props.navigation.navigate('Profile')
  }


  render () {
    // console.log(this.props)
    return (
      <View style={styles.backgroundView}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              SING UP
            </Text>              
          </View>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Company Name
            </Text>
            <TextInput onChangeText={(text) => setState({input: text}, 'Name')} />
            <Text style={styles.sectionText}>
              Email
            </Text>
            <TextInput onChangeText={(text) => setState({input: text}, 'Email')} />
            <Text style={styles.sectionText}>
              Password
            </Text>
            <TextInput secureTextEntry={true} onChangeText={(text) => setState({input: text}, 'Password')} />
            <Text style={styles.sectionText}>
              Confirm Password
            </Text>
            <TextInput secureTextEntry={true} onChangeText={(text) => setState({input: text}, 'Confirm')} />
            <TouchableOpacity style={styles.btnSing} onPress={this.openProfile}>
              <Text style={styles.buttonText}> Sing Up </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
