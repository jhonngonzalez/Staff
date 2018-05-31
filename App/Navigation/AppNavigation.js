import { StackNavigator } from 'react-navigation'
import SignUp from '../Containers/SignUp'
import Profile from '../Containers/Profile'
import {connect} from 'react-redux'

//actions
// import * as actions from '../Redux/Auth'

//styles
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SignUp: { screen: SignUp },
  Profile: { screen: Profile }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SignUp',
  navigationOptions: {
    headerStyle: styles.header
  }
})

// export default connect(null, actions)(PrimaryNav)
export default PrimaryNav
