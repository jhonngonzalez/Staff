import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

export default class PersonalInformation extends Component {

  static defaultProps = { show: true }

  state = {
    firstName: '',
    lastName: ''
  }

  static propTypes = {
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    const {firstName, lastName} = this.state
    const {title, style} = this.props
    console.log('props: ', this.props)
    let personalComponent = null
    if (this.props.show) {
      return (
        <View>
          <Text style={style}>
            {{title}}
          </Text>
          <View>
            <Text style={style}>
              First Name
            </Text>
            <TextInput
              onChangeText={(text) => this.setState({firstName: text}) }
              value={firstName ? firstName : this.props.firstName}
            />
            <Text style={style}>
              Last Name
            </Text>
            <TextInput
              onChangeText={(text) => this.setState({lastName: text}) }
              value={lastName ? lastName : this.props.lastName}
            />
          </View>
        </View>
      )
    }
    return personalComponent
  }
}