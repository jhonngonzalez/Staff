import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

//Componenets
import PersonalInformation from './PersonalInformation'

export default class ContactInformation extends Component {

  static defaultProps = { show: true }

  state = { 
    phone: ''
  }

  static propTypes = {
    title: PropTypes.string,
    countryCode: PropTypes.number,
    phone: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    const {phone } = this.state
    const {countryCode, firstName, lastName, style, title} = this.props
    let contactComponent = null
    if (this.props.show) {
      return (
        <View>
          <Text style={style.title}>
            {title}
          </Text>
          <View>
            <PersonalInformation
              firstName={firstName}
              lastName={lastName}
              style={{title: style.title, text:style.text}}
            />
            <Text style={style.text}>
              Country Code
            </Text>
            <TextInput
              editable={false}                  
              value={this.props.countryCode}
            />
            <Text style={style.text}>
              Phone
            </Text>
            <TextInput            
              keyboardType='numeric'
              onChangeText={(text) => this.setState({phone: text}) }
              value={phone ? phone : this.props.phone}
            />
          </View>
        </View>
      )
    }
    return contactComponent
  }
}
