import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/LaunchScreenStyles'

// Actions
import authActions from '../Redux/AuthRedux'

export class Profile extends Component {

  constructor(props) {
    super(props);
    console.log('props', props)
    this.state = {
      firstName : '',
      lastName : '',
      companyName : '',
      email : '',
      role :'',
      image: ''
    }
  }

  render () {
    return (
      <View style={styles.backgroundView}>
        <ScrollView style={styles.container}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{
              position: 'absolute',
              paddingTop: 30,
              paddingHorizontal: 5
            }}>
              <Text style={styles.sectionText}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Bienvenido
            </Text> 
            <Text style={styles.sectionText}>
               
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
    login: (user) => dispatch(authActions.loginRequest(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)