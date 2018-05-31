import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'

// Actions
// import * as actions from '../Redux/Auth'

export default class Profile extends Component {
  render () {
    // console.log(this.props)
    return (
      <View style={styles.backgroundView}>
        <ScrollView style={styles.container}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
              position: 'absolute',
              paddingTop: 30,
              paddingHorizontal: 5,
              zIndex: 10
            }}>
              <Text style={styles.sectionText}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Profile
            </Text> 
          </View>
        </ScrollView>
      </View>
    )
  }
}