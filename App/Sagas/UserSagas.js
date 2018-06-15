import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import UserActions from '../Redux/UserRedux'

export function * getProfile (api, action) {
  const user = action.datauser
  // make the call to the api
  const response = yield call(api.getProfile, user)
  if (response.ok) {
    // do data conversion here if needed
    const data = response.data.data
    const datauser = data
    yield put(UserActions.profileSuccess(datauser))
  } else {
    yield put(UserActions.profileFailure(response.data.error.userMessage))
  }
}

export function * getUpdateProfile (api, action) {
  const user = action.datauser
  // make the call to the api
  const response = yield call(api.getUpdateProfile, user)
  if (response.ok) {
    // do data conversion here if needed
    const data = response.data.data
    const datauser = data
    yield put(UserActions.updateProfileSuccess(datauser))
  } else {
    yield put(UserActions.updateProfileFailure(response.data.error.userMessage))
  }
}