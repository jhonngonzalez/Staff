import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput, AppRegistry } from 'react-native'
import { connect } from 'react-redux'
import { Images  } from '../../Themes/'

// Components
import CompanyInformation from '../../Components/Profile/CompanyInformation'
import PersonalInformation from '../../Components/Profile/PersonalInformation'
import ComplementInformation from '../../Components/Profile/ComplementInformation'
import LanguageInformation from '../../Components/Profile/LanguageInformation'
import ContactInformation from '../../Components/Profile/ContactInformation'

// Styles
import styles from './../Styles/LaunchScreenStyles'

// Actions
import userActions from '../../Redux/UserRedux'

export class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = props.auth.user.response
    this.props.profile(this.state)
  }

  componentWillReceiveProps(newProps){
    if(this.props.user.profileResults !== newProps.user.profileResults && newProps.user.profileResults){
      this.state = newProps.user.user.response
      console.log('this.state: ', this.state.image)
    }
  }

  render () {
    return (
      <View style={styles.backgroundView}>
        <ScrollView style={styles.container}>
          <View style={styles.containerProfile}>
            {/*<Image 
              source={Images.background} 
              style={styles.image} 
            />*/}
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('Login')} 
              style={styles.btnLogo3ut}>
              <Text style={styles.sectionHeaderText}>
                Log out
              </Text>
            </TouchableOpacity>
            <View style={styles.headerView}>
              <Text style={styles.sectionHeaderText}>
                {/* { this.state.companyName }*/}
              </Text>
              <Text style={styles.sectionHeaderText}>
                { this.state.email }  | { this.state.phone }
              </Text>
              <View>
                <Image 
                  source={{uri: this.state.image}} 
                  style={styles.userImage}
                />
              </View>
            </View>
            <View style={{backgroundColor: 'white'}}>
              {
                this.state.role == 'company' ? 
                  <CompanyInformation 
                    title={'Company Information'}
                    companyName={this.state.companyName}
                    style={{text: styles.contentText,title: styles.titleText}}
                  />
                :
                  <PersonalInformation 
                    title={'Personal Information'}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    style={{text: styles.contentText,title: styles.titleText}}
                  />
              }
              <ComplementInformation
                email={this.state.email}
                location={this.state.location}
                countryCode={this.state.countryCode}
                phone={this.state.phone}
                style={{text: styles.contentText}}
              />
            </View>
            {
              this.state.role == 'developer' ?
                <LanguageInformation
                  languages={this.state.languages}
                  levels={this.state.level}
                  style={{text: styles.contentText,title: styles.titleText, picker: styles.pickerLanguage}}
                />
              : null
            }
            <View>
              <Text>
                Contact Information
              </Text>
              {
                this.state.role == 'company' ?
                  <ContactInformation
                    languages={this.state.languages}
                    levels={this.state.level}
                    style={{text: styles.contentText,title: styles.titleText, picker: styles.pickerLanguage}}
                  />
                : null
              }
            </View>
          </View>
          <View>
            <TouchableOpacity 
              style={styles.btnUpdate}
              onPress={() => this.props.this} 
            >
              <Text>
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

mapStateToProps = function(state){
  return {
    user: state.user,
    auth: state.auth
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    profile: (user) => dispatch(userActions.profileRequest(user)),
    updateProfile: (user) => dispatch(userActions.updateProfileRequest(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)