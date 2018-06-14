import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

//Componenets
import PersonalInformation from './PersonalInformation'

export default class ContactInformation extends Component {

  static defaultProps = { show: true }

  state = { 
    firstName: '',
    lastName: '',
    phone: ''
  }

  static propTypes = {
    countryCode: PropTypes.number,
    phone: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    const {countryCode, phone} = this.state
    const {style} = this.props
    console.log('props: ', this.props)
    let contactComponent = null
    if (this.props.show) {
      return (
        <View>
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
      )
    }
    return contactComponent
  }
}
