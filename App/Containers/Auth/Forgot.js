import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './../Styles/LaunchScreenStyles'

// Actions
import authActions from '../../Redux/AuthRedux'

export class Forgot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  forgot(){
    if(this.state.email){
      console.log('view: ', this.state)
      this.props.forgot(this.state)
    }
  }

  reset(){
    this.props.navigation.navigate('Reset')
  }

  componentWillReceiveProps(newProps){
    if(this.props.user.forgotResults !== newProps.user.forgotResults && newProps.user.forgotResults){
      this.props.navigation.navigate('Login')
    }
  }

  render () {
    return (
      <View style={styles.backgroundView}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Forgot Password
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
            <TouchableOpacity 
              style={styles.btnSing} 
              onPress={this.forgot.bind(this)}
            >
              <Text style={styles.buttonText}> Request </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.sectionText} 
              onPress={this.reset.bind(this)}>
              Reset
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
    forgot: (user) => dispatch(authActions.forgotRequest(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgot)