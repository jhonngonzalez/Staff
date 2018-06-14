import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import UserActions from '../Redux/UserRedux'

export function * getProfile (api, action) {
  const user = action.datauser
  // make the call to the api
  const response = yield call(api.getProfile, user)
  console.log('response sagas', response)
  if (response.ok) {
    // do data conversion here if needed
    const data = response.data.data
    const datauser = data
    console.log('reponse sagas success', data)
    yield put(UserActions.profileSuccess(datauser))
  } else {
    console.log('response sagas error', response.data.error)
    yield put(UserActions.profileFailure(response.data.error.userMessage))
  }
}

export function * getUpdateProfile (api, action) {
  const user = action.datauser
  // make the call to the api
  const response = yield call(api.getUpdateProfile, user)
  console.log('response sagas', response)
  if (response.ok) {
    // do data conversion here if needed
    const data = response.data.data
    const datauser = data
    console.log('reponse sagas success', data)
    yield put(UserActions.updateProfileSuccess(datauser))
  } else {
    console.log('response sagas error', response.data.error)
    yield put(UserActions.updateProfileFailure(response.data.error.userMessage))
  }
}