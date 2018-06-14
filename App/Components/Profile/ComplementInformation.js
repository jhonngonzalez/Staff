import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

export default class ComplementInformation extends Component {

  static defaultProps = { show: true }

  state = { 
  	location: '',
  	phone: ''
	}

  static propTypes = {
    email: PropTypes.string,
    location: PropTypes.string,
    countryCode: PropTypes.number,
    phone: PropTypes.number,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    const {email, location, countryCode, phone} = this.state
    const {style } = this.props
    console.log('props: ', this.props)
    let complementComponent = null
    if (this.props.show) {
      return (
        <View>
          <Text style={style.text}>
            Email
          </Text>
          <TextInput
            editable={false}                  
            value={this.props.email}
          />
          <Text style={style.text}>
            Location
          </Text>
          <TextInput
            onChangeText={(text) => this.setState({location: text}) }
            value={location ? location : this.props.location}
          />
          <Text style={style.text}>
            Country code
          </Text>
          <TextInput
            editable={false}                  
            value={countryCode ? countryCode : this.props.countryCode}
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
    return complementComponent
  }
}







