import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReduxPersist from '../Config/ReduxPersist'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
// Styles
import styles from './Styles/LaunchScreenStyles'

// Screem
import Profile from './Profile'

import authActions from '../Redux/AuthRedux'

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.dataForm = {
      name: '',
      email: '',
      password: '',
      confirm: ''
    }
  }

  validateSign = function() {
    if(this.dataForm.email && this.dataForm.password && this.dataForm.password === this.dataForm.confirm){
      return false
    }else{
      return true
    }
  }

  signUp = function(){
    if (!ReduxPersist.active) {
      this.props.signUp()
    }
  }

  setState= function(value, nameInput) {
    switch(nameInput){
      case 'name':{
        this.dataForm.name = value
        this.validateSign()
      };
      case 'email':{
        this.dataForm.email = value
        this.validateSign()
      };
      case 'password':{
        this.dataForm.password = value
        this.validateSign()
      };
      case 'confirm':{
        this.dataForm.confirm = value
        this.validateSign()
      };
      default:{
        this.validateSign()
      };
    }
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
              name = "SignUp"
              onChangeText={(text) => this.dataForm.name = text}
              className = "Name"
            />
            <Text style={styles.sectionText}>
              Email
            </Text>
            <TextInput 
              name = "SignUp"
              onChangeText={(text) => this.setState({text}, 'email')}
              className = "Email"
            />
            <Text style={styles.sectionText}>
              Password
            </Text>
            <TextInput 
              secureTextEntry={true} 
              name = "SignUp"
              onChangeText={(text) => this.setState({text}, 'password')}
              className = "Password"
            />
            <Text style={styles.sectionText}>
              Confirm Password
            </Text>
            <TextInput
              secureTextEntry={true} 
              name = "SignUp"
              onChangeText={(text) => this.setState({text}, 'confirm')}
              className = "Confirm"
            />
            <TouchableOpacity 
              style={styles.btnSing} 
              onPress={this.signUp}
            >
              <Text style={styles.buttonText}> Sing Up </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

//
const mapDispatchToProps = (dispatch) => ({
  signUp: () => dispatch(authActions.singupRequest())
})

connect(null, mapDispatchToProps)(SignUp)
