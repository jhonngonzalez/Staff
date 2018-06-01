import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * getSignUp (api, action) {
  const { user } = action
  // make the call to the api
  const response = yield call(api.getUser, user)

  if (response.ok) {
    const data = path(['data', 'items'], response)[0]
    const datauser = data
    // do data conversion here if needed
    yield put(AuthActions.signupSuccess(datauser))
  } else {
    yield put(AuthActions.signupFailure())
  }
}
