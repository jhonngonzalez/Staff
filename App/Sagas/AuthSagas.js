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
    const data = response.data.data
    const datauser = data
    // do data conversion here if needed
    console.log('response sagas success', data)
    yield put(AuthActions.signUpSuccess(datauser))
  } else {
     console.log('response sagas error', response.data.error.userMessage)
    yield put(AuthActions.signUpFailure(response.data.error.userMessage))
  }
}

export function * getLogin (api, action) {
  console.log('action', action)
  const user = action.datauser
  // make the call to the api
  const response = yield call(api.getLogin, user)
  console.log('response sagas', response)
  if (response.ok) {
    const data = response.data.data
    const datauser = data
    // do data conversion here if needed
    console.log('response sagas success', data)
    yield put(AuthActions.loginSuccess(datauser))
  } else {
     console.log('response sagas error', response.data.error.userMessage)
    yield put(AuthActions.loginFailure())
  }
}

export function * getForgot (api, action) {
  console.log('action', action)
  const user = action.datauser
  // make the call to the api
  const response = yield call(api.getForgot, user)
  console.log('response sagas', response)
  if (response.ok) {
    const data = response.data.data
    const datauser = data
    // do data conversion here if needed
    console.log('response sagas success', data)
    yield put(AuthActions.forgotSuccess(datauser))
  } else {
     console.log('response sagas error', response.data.error.userMessage)
    yield put(AuthActions.forgotFailure())
  }
}

export function * getReset (api, action) {
  console.log('action', action)
  const user = action.datauser
  // make the call to the api
  const validate = yield call(api.getToken, user)
  console.log('validate sagas', validate)
  if(validate.ok){
    const response = yield call(api.getReset, user)
    console.log('response sagas', response)
    if (response.ok) {
      const data = response.data.data
      const datauser = data
      // do data conversion here if needed
      console.log('response sagas success', data)
      yield put(AuthActions.resetSuccess(datauser))
    } else {
       console.log('response sagas error', response.data.error.userMessage)
      yield put(AuthActions.resetFailure())
    }
  }
}
