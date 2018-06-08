import { StackNavigator } from 'react-navigation'
import SignUp from '../Containers/Auth/SignUp'
import Profile from '../Containers/Profile'
import Login from '../Containers/Auth/Login'
import Forgot from '../Containers/Auth/Forgot'
import Reset from '../Containers/Auth/Reset'
import {connect} from 'react-redux'

//styles
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const authRoutes = StackNavigator({
  SignUp: { screen: SignUp },
  Login: { screen: Login },
  Forgot: { screen: Forgot },
  Reset: { screen: Reset },
  Profile: { screen: Profile }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default authRoutes
