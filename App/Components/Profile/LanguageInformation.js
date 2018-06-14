import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Picker } from 'react-native'

export default class LanguageInformation extends Component {

  static defaultProps = { show: true }

  state = { 
    language : '',
    level : ''
  }

  static propTypes = {
    languages: PropTypes.array,
    levels: PropTypes.array,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    const {style, languages, levels} = this.props
    console.log('props: ', this.props)
    let languageComponent = null
    if (this.props.show) {
      return (
        <View>
          <Text style={style.title}>
            Languages
          </Text>
          <View>
            <Text style={style.text}>
              Name
            </Text>
            <Picker
              style={style.pickerLanguage}
              mode="dropdown"
              selectedValue={this.state.language}
              onValueChange={(value) => this.setState({language: value})}
            >
              {
                Object.keys(languages).map((key) => {
                    return (<Item label={language[key]} value={key} key={key}/>) //if you have a bunch of keys value pair
                })
              }
            </Picker>
            <Text style={style.text}>
              Level
            </Text>
            <Picker
              style={style.pickerLanguage}
              mode="dropdown"
              selectedValue={this.state.level}
              onValueChange={(value) => this.setState({level: value})}
            >
              {
                Object.keys(levels).map((key) => {
                    return (<Item label={levels[key]} value={key} key={key}/>) //if you have a bunch of keys value pair
                })
              }
            </Picker>
          </View>
        </View>
      )
    }
    return languageComponent
  }
}
