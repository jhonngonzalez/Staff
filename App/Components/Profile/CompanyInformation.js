import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

export default class CompanyInformation extends Component {

  static defaultProps = { show: true }

  state = { companyName : ''}

  static propTypes = {
    title: PropTypes.string,
    companyName: PropTypes.string,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    const {companyName} = this.state
    const {title, style} = this.props
    console.log('props: ', this.props)
    let companyComponent = null
    if (this.props.show) {
      return (
        <View>
          <Text style={style.title}>
            {title}
          </Text>
          <View>
            <Text style={style.text}>
              Company Name
            </Text>
            <TextInput
              onChangeText={(text) => this.setState({companyName: text}) }
              value={companyName ? companyName : this.props.companyName}
            />
          </View>
        </View>
      )
    }
    return companyComponent
  }
}
