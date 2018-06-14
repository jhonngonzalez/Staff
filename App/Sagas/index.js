import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { AuthTypes } from '../Redux/AuthRedux'
import { UserTypes } from '../Redux/UserRedux'
import { GithubTypes } from '../Redux/GithubRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import * as getAuth from './AuthSagas'
import * as getUser from './UserSagas'
import { getUserAvatar } from './GithubSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

//default function with roots
export default function * root () {
  console.log('api', api)
  yield all([

  	//takeLatest with the functions
  	//takeLatest --> Spawns a saga on each action dispatched to the Store that matches pattern
  	//First Param --> link and name of type action. 
  	//Second Param --> link and name of function action.
  	//third Param --> var or constant of connection.
    takeLatest(AuthTypes.SIGN_UP_REQUEST, getAuth.getSignUp, api),

    takeLatest(AuthTypes.LOGIN_REQUEST, getAuth.getLogin, api),

    takeLatest(AuthTypes.FORGOT_REQUEST, getAuth.getForgot, api),

    takeLatest(AuthTypes.RESET_REQUEST, getAuth.getReset, api),

    takeLatest(UserTypes.PROFILE_REQUEST, getUser.getProfile, api),

    takeLatest(UserTypes.UPDATE_PROFILE_REQUEST, getUser.getUpdateProfile, api)
  ])
}
