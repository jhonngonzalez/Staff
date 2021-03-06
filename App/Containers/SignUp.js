import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReduxPersist from '../Config/ReduxPersist'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
// Styles
import styles from './Styles/LaunchScreenStyles'

// Screem
import Profile from './Profile'

// Auth
import authActions from '../Redux/AuthRedux'

export class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirm: ''
    }
  }

  signUp(){
    console.log('view: ', this.state)
    this.props.signUp(this.state)
  }

  render () {
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
            <TextInput 
              onChangeText={(text) => this.state.name = text}
              className = "Name"
            />
            <Text style={styles.sectionText}>
              Email
            </Text>
            <TextInput 
              onChangeText={(text) => this.state.email = text}
              className = "Email"
            />
            <Text style={styles.sectionText}>
              Password
            </Text>
            <TextInput 
              secureTextEntry={true} 
              onChangeText={(text) => this.state.password = text}
              className = "Password"
            />
            <Text style={styles.sectionText}>
              Confirm Password
            </Text>
            <TextInput
              secureTextEntry={true} 
              onChangeText={(text) => this.state.confirm = text}
              className = "Confirm"
            />
            <TouchableOpacity 
              style={styles.btnSing} 
              onPress={this.signUp.bind(this)}
            >
              <Text style={styles.buttonText}> Sing Up </Text>
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
    signUp: (user) => dispatch(authActions.signUpRequest(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
