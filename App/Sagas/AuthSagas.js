import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * getSignUp (api, action) {
  const user = action.datauser
  // make the call to the api
  const response = yield call(api.getSign, user)
  if (response.ok) {
    // do data conversion here if needed
    const log = yield call(api.getLogin, user) 
    if(log.ok){
      const data = response.data.data
      const datauser = data
      yield put(AuthActions.signUpSuccess(datauser))
      yield put(AuthActions.loginSuccess(datauser))
    }else{
      yield put(AuthActions.signUpSuccess(datauser))
      yield put(AuthActions.loginFailure(log.data.error.userMessage))
    }
  } else {
    yield put(AuthActions.signUpFailure(response.data.error.userMessage))
  }
}

export function * getLogin (api, action) {
  const user = action.datauser
  // make the call to the api
  const validate = yield call(api.getPreLogin, user)
  if(validate.ok){
    const response = yield call(api.getLogin, user)
    if (response.ok) {
      const data = response.data.data
      const datauser = data
      // do data conversion here if needed
      yield put(AuthActions.loginSuccess(datauser))
    } else {
      yield put(AuthActions.loginFailure())
    }
  }
}

export function * getForgot (api, action) {
  const user = action.datauser
  // make the call to the api
  const response = yield call(api.getForgot, user)
  if (response.ok) {
    const data = response.data.data
    const datauser = data
    // do data conversion here if needed
    yield put(AuthActions.forgotSuccess(datauser))
  } else {
    yield put(AuthActions.forgotFailure())
  }
}

export function * getReset (api, action) {
  const user = action.datauser
  // make the call to the api
  const validate = yield call(api.getToken, user)
  if(validate.ok){
    const response = yield call(api.getReset, user)
    if (response.ok) {
      const data = response.data.data
      const datauser = data
      // do data conversion here if needed
      yield put(AuthActions.resetSuccess(datauser))
    } else {
      yield put(AuthActions.resetFailure())
    }
  }
}
