import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Picker, TouchableOpacity, TextInput } from 'react-native'

export default class SkillsInformation extends Component {

  static defaultProps = { show: true }

  state = { 
    skill : '',
    level : ''
  }

  static propTypes = {
    title: PropTypes.string,
    skills: PropTypes.array,
    levels: PropTypes.array,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    const {style, skills, levels, title} = this.props
    let skillComponent = null
    if (this.props.show) {
      return (
        <View>
          <Text style={style.title}>
            {title}
          </Text>
          <View>
            <Text style={style.text}>
              Name
            </Text>
            <TextInput/>
            {
              levels ?
                <Text style={style.text}>
                  Level
                </Text>
              : null
            }
            {
              levels ?
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
              : null
            }
            
            <TouchableOpacity 
              style={style.btn}
              onPress={() => this.props.this} 
            >
              <Text>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    return skillComponent
  }
}
