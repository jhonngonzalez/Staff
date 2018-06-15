import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View, TextInput, AppRegistry} from 'react-native'
import { connect } from 'react-redux'
import { Images  } from '../../Themes/'

// Components
import CompanyInformation from '../../Components/Profile/CompanyInformation'
import PersonalInformation from '../../Components/Profile/PersonalInformation'
import ComplementInformation from '../../Components/Profile/ComplementInformation'
import LanguageInformation from '../../Components/Profile/LanguageInformation'
import ContactInformation from '../../Components/Profile/ContactInformation'
import SkillsInformation from '../../Components/Profile/SkillsInformation'

// Styles
import styles from './../Styles/LaunchScreenStyles'

// Actions
import userActions from '../../Redux/UserRedux'
import utilActions from '../../Redux/UtilRedux'

export class Profile extends Component {

  constructor(props) {

    super(props);
    console.log('props', props)
    this.state = {
      user: props.auth.user.response,
      languages: {},
      languagesLevel: {},
      skillsLevel: {}
    }
    this.props.profile(this.state.user)
    if(this.state.user.role == 'developer') {
      this.props.queryLanguage({constName: 'lenguages', token: this.state.user.token})
      this.props.queryLanguageLevel({constName: 'skillsLevel', token: this.state.user.token})
      this.props.querySkillLevel({constName: 'lenguagesLevel', token: this.state.user.token})
    }
    
  }

  componentWillReceiveProps(newProps){
    if(this.props.user.profileResults !== newProps.user.profileResults && newProps.user.profileResults){
      this.state.user = newProps.user.user.response
      this.state.user.token = this.props.user.datauser.token
    }
    if(this.props.util.queryLanguageResults != newProps.util.queryLanguageResults && newProps.util.queryLanguageResults){
      this.state.languages = newProps.util.dataLanguage.response
    }
    if(this.props.util.queryLanguageLevelResults != newProps.util.queryLanguageLevelResults && newProps.util.queryLanguageLevelResults){
      this.state.languagesLevel = newProps.util.dataLanguageLevel.response
    }
    if(this.props.util.dataSkillLevel != newProps.util.dataSkillLevel && newProps.util.dataSkillLevel){
      this.state.skillsLevel = newProps.util.dataSkillLevel.response
      console.log('newProps: ', newProps)
      console.log('this.state: ', this.state)
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
              style={styles.btnLogout}>
              <Text style={styles.sectionHeaderText}>
                Log out
              </Text>
            </TouchableOpacity>
            <View style={styles.headerView}>
              <Text style={styles.sectionHeaderText}>
                {/* { this.state.companyName }*/}
              </Text>
              <Text style={styles.sectionHeaderText}>
                { this.state.user.email }  | { this.state.user.phone }
              </Text>
              <View>
                <Image 
                  source={{uri: this.state.user.image}} 
                  style={styles.userImage}
                />
              </View>
            </View>
            <View style={{paddingBottom: 10,backgroundColor: 'white'}}>
              {
                this.state.user.role == 'company' ? 
                  <CompanyInformation 
                    title={'Company Information'}
                    companyName={this.state.user.companyName}
                    style={{text: styles.contentText,title: styles.titleText}}
                  />
                :
                  <PersonalInformation 
                    title={'Personal Information'}
                    firstName={this.state.user.firstName}
                    lastName={this.state.user.lastName}
                    style={{text: styles.contentText,title: styles.titleText}}
                  />
              }
              <ComplementInformation
                email={this.state.user.email}
                location={this.state.user.location}
                countryCode={this.state.user.countryCode}
                phone={this.state.user.phone}
                style={{text: styles.contentText}}
              />
            </View>
            <View>
              {
                // this.state.user.role == 'developer' ?
                //   <LanguageInformation
                //     title={'Languages'}
                //     languages={this.state.languages}
                //     levels={this.state.languagesLevel}
                //     style={{text: styles.contentText,title: styles.titleText, picker: styles.pickerLanguage, btn: styles.btnAdd}}
                //   />
                // : null
              }
            </View>
            <View>
              {
                this.state.user.role == 'company' ?
                  <ContactInformation
                    title={'Contact Information'}
                    firstName={this.state.user.firstName}
                    lastName={this.state.user.lastName}
                    languages={this.state.user.languages}
                    levels={this.state.user.languagesLevel}
                    style={{text: styles.contentText,title: styles.titleText}}
                  />
                : null
              }
            </View>
            <View>
              {
                this.state.user.role != 'company' ?
                  <SkillsInformation
                    title={'Skills'}
                    // skills={this.state.user.skillsList}
                    levels={this.state.user.skillsLevel}
                    style={{text: styles.contentText,title: styles.titleText, picker: styles.pickerLanguage, btn : styles.btnAdd, skill: styles.skillBtn}}
                  />
                : 
                  <SkillsInformation
                    title={'Skills'}
                    // skills={this.state.skills}
                    style={{text: styles.contentText,title: styles.titleText, picker: styles.pickerLanguage, btn : styles.btnAdd, skill: styles.skillBtn}}
                  />
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
    auth: state.auth,
    util: state.util
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    profile: (user) => dispatch(userActions.profileRequest(user)),
    queryLanguage: (user) => dispatch(utilActions.queryLanguagesRequest(user)),
    queryLanguageLevel: (user) => dispatch(utilActions.queryLanguagesLevelRequest(user)),
    querySkillLevel: (user) => dispatch(utilActions.querySkillLevelRequest(user)),
    updateProfile: (user) => dispatch(userActions.updateProfileRequest(user))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)