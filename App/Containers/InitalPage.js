import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/LaunchScreenStyles'

// Auth
import authActions from '../Redux/AuthRedux'

export class Inital extends Component {

  constructor(props) {
    super(props);
    this.state = {role: ''}
  }

  signup(){
    this.props.selectRole(this.state)
    this.props.navigation.navigate('SignUp')
  }
  render () {
    return (
      <View style={styles.backgroundView}>
        <ScrollView style={styles.container}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end' 
          }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{
              position: 'absolute',
              paddingTop: 0,
              paddingHorizontal: 0
            }}>
              <Text style={styles.sectionText}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Welcome to Staff on Demand Platform
            </Text> 
          </View>
          <View style={styles.section}>
            <TouchableOpacity 
              onPress={() => {
                  this.state.role = 'company'
                  this.signup()
                }
              }
              style={styles.btnSing} 
            >
              <Text style={styles.buttonText}> Company </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => {
                  this.state.role = 'developer'
                  this.signup()
                }
              }
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

const mapDispatchToProps = (dispatch) => {
  return {
    selectRole: (user) => dispatch(authActions.selectRole(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inital)