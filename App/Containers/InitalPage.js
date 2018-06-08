import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/LaunchScreenStyles'


export class Inital extends Component {

  constructor(props) {
    super(props);
    this.state = {
      role: ''
    }
  }

  signup(role){
    this.props.user.role = this.state.role
    this.props.navigation.navigate('signup')
  }

  render () {
    return (
      <View style={styles.backgroundView}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Welcome to Staff on Demand Platform
            </Text> 
          </View>
          <View style={styles.section}>
            <TouchableOpacity 
              onPress={this.signup('company')}
              style={styles.btnSing} 
            >
              <Text style={styles.buttonText}> Company </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={this.signup('freelancer')}
              style={styles.btnSing} 
            >
              <Text style={styles.buttonText}> Freelancer </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

mapStateToProps = function(state){
  return {
    user: state.auth
  }
} 

export default connect(mapStateToProps, null)(Inital)