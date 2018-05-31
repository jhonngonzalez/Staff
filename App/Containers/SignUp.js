import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
// Styles
import styles from './Styles/LaunchScreenStyles'

// Screem
import Profile from './Profile'

// import * as auth from '../Redux/Auth'

export default class SignUp extends Component {

  constructor(props) {
    super(props);
  }

  mapDispatchToProps = dispatch => {
    return {
        setState: (text) => dispatch({type: 'SINGUP_STATE', text})
    };
  };
  
  /*dataUser = {name: '', email: '', password: '', confirm: ''};

  validateSign = function(){
    // if(this.dataUser.email && this.dataUser.password && this.dataUser.password === this.dataUser.confirm)
      return true
    // else
    //   return false
  }*/

  setState = function(value, idInput) {
    /*switch(idInput){
      case 'Name':
        // this.dataUser.name = value
      case 'Email':
        // this.dataUser.email = value
      case 'Password':
        // this.dataUser.password = value
      case 'Confirm':
        // this.dataUser.confirm = value
      default:
        // this.dataUser
    }*/
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
              onChangeText = {(text) => {this.setState(text, 'Name')}}
              name = "SignUp"
              className = "Name"
            />
            <Text style={styles.sectionText}>
              Email
            </Text>
            <TextInput 
              onChangeText={(text) => {this.setState(text, 'Email')}}
              name = "SignUp"
              className = "Email"
            />
            <Text style={styles.sectionText}>
              Password
            </Text>
            <TextInput 
              secureTextEntry={true} 
              onChangeText={(text) => {this.setState(text, 'Password')}}
              name = "SignUp"
              className = "Password"
            />
            <Text style={styles.sectionText}>
              Confirm Password
            </Text>
            <TextInput
              secureTextEntry={true} 
              onChangeText={(text) => {this.setState(text, 'Confirm')}}
              name = "SignUp"
              className = "Confirm"
            />
            <TouchableOpacity 
              style={styles.btnSing} 
              onPress={this.signUp}
              // disabled={this.validateSign}
            >
              <Text style={styles.buttonText}> Sing Up </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
