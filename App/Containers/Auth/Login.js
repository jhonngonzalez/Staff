import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './../Styles/LaunchScreenStyles'

// Actions
import authActions from '../../Redux/AuthRedux'

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    }
  }

  login(){
    if(this.state.email && this.state.password){
      console.log('view: ', this.state)
      this.props.login(this.state)
    }
  }

  sign(){
    this.props.navigation.navigate('SignUp')
  }

  forgot(){
    this.props.navigation.navigate('Forgot')
  }

  componentWillReceiveProps(newProps){
    if((this.props.user.loginResults !== newProps.user.loginResults) && newProps.user.loginResults === true){
      console.log('newProps.user.loginResults: ', newProps.user.loginResults)
      this.state.message = 'Logged in successfull'
      this.props.navigation.navigate('Profile')
    }
  }

  render () {
    return (
      <View style={styles.backgroundView}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Log in
            </Text> 
          </View>
          <View style={styles.section} >
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
            <TouchableOpacity 
              style={styles.btnSing} 
              onPress={this.login.bind(this)}
            >
              <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
          </View>
          <View>
              <Text 
                style={styles.sectionText} 
                onPress={this.sign.bind(this)}
              > Signup </Text>
          </View>
        </ScrollView>
        <View>
            <Text 
              style={styles.sectionText} 
              onPress={this.forgot.bind(this)}
            > Forgot </Text>
          </View>
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
    login: (user) => dispatch(authActions.loginRequest(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)