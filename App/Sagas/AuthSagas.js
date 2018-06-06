import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * getSignUp (api, action) {
  console.log('action', action)
  const user = action.datauser
  // make the call to the api
  const response = yield call(api.getSign, user)
  console.log('response sagas', response)
  if (response.ok) {
    const data = path(['data', 'items'], response)[0]
    const datauser = data
    // do data conversion here if needed
    console.log('response sagas success', data)
    yield put(AuthActions.signUpSuccess(datauser))
  } else {
     console.log('response sagas error')
    yield put(AuthActions.signUpFailure())
  }
}
