import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './../Styles/LaunchScreenStyles'

// Actions
import authActions from '../../Redux/AuthRedux'

export class Reset extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      password: '',
      confirmPassword: ''
    }
  }

  reset(){
    if(this.state.password === this.state.confirm){
      console.log('view: ', this.state)
      this.props.reset(this.state)
    }
  }

  login(){
    console.log('Click: ')
    this.props.navigation.navigate('Login')
  }

  componentWillReceiveProps(newProps){
    if(this.props.user.resetResults !== newProps.user.resetResults && newProps.user.resetResults){
      this.props.navigation.navigate('Login')
    }
  }

  render () {
    return (
      <View style={styles.backgroundView}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Reset Password
            </Text> 
          </View>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Code
            </Text>
            <TextInput 
              onChangeText={(text) => this.state.code = text}
              className = "code"
            />
            <Text style={styles.sectionText}>
              New Password
            </Text>
            <TextInput 
              onChangeText={(text) => this.state.password = text}
              className = "newPassword"
            />
            <Text style={styles.sectionText}>
              Confirm
            </Text>
            <TextInput 
              onChangeText={(text) => this.state.confirm = text}
              className = "confirmPassword"
            />
            <TouchableOpacity 
              style={styles.btnSing} 
              onPress={this.reset.bind(this)}
            >
              <Text style={styles.buttonText}> Reset </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.sectionText} 
              onPress={this.login.bind(this)}>
              Login
            </Text>
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
    reset: (user) => dispatch(authActions.resetRequest(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset)