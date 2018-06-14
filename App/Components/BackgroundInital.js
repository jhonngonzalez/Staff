import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import styles from './Styles/AlertMessageStyles'

const remote = 'https://www.google.com/search?tbm=isch&q=staff+on+demand+rokk3r+labs&spell=1&sa=X&ved=0ahUKEwjLo9HK_8TbAhUKn1MKHctZD9AQBQgwKAA&biw=1680&bih=930&dpr=1#imgrc=A6tK0IWAxncLjM:';

export default class backgroundInital extends component{
	static defaultProps = { show: true }

  static propTypes = {
    style: PropTypes.object,
    show: PropTypes.bool
  }

	
	render(){
	let backgroundComponent = null
    if (this.props.show) {
      return (
      	<View>
          <Image
            style={{
              flex: 1,
              resizeMode: 'cover',
              width: 200,
              height: 200
            }}
            source={{ uri: 'Images:/ir.png' }}
          />
      	</View>
      )
    }
    return backgroundComponent
	}
} 