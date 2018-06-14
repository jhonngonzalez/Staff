import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'cover'
  },
  centered: {
    alignItems: 'center',
    paddingTop: 25
  },
  btnSing: {
    margin: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  image: {
    // marginTop: 5,
    margin: 0,
    height: 225,
    width: 375,
    resizeMode: 'cover'
  },
  backgroundView: {
    backgroundColor: Colors.snow
  },
  sectionHeaderText: {
    margin: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    color: Colors.snow,
    justifyContent: 'center'
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.black,
    margin: 5
  },
  titleText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.black,
    margin: 10,
    borderBottomColor: Colors.black,
    borderBottomWidth : 1
  },
  contentText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.black,
    margin: 5
  },
  btnUpdate: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 5,
    height: 40
  },
  containerProfile: {
    margin: 5
  },
  userImage: {
    width: 75,
    height: 75,
    borderRadius: 40
  },
  btnLogout: {
    position: 'absolute',
    alignSelf: 'stretch',
    paddingTop: 0,
    paddingHorizontal: 5,
    backgroundColor: 'black'
  },
  pickerLanguage: {
    borderRadius: 5
  }



})
