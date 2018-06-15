import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import UtilActions from '../Redux/UtilRedux'

export function * getLanguage (api, action) {
  const group = action.dataLanguage
  // make the call to the api
  const response = yield call(api.getConstFormularies, group)
  if (response.ok) {
    // do data conversion here if needed
    const data = response.data.data
    const dataLanguage = data
    yield put(UtilActions.queryLanguagesSuccess(dataLanguage))
  } else {
    yield put(UtilActions.queryLanguagesFailure(response.data.error.userMessage))
  }
}

export function * getLanguageLevel (api, action) {
  const group = action.dataLanguageLevel
  // make the call to the api
  const response = yield call(api.getConstFormularies, group)
  if (response.ok) {
    // do data conversion here if needed
    const data = response.data.data
    const datalevel = data
    yield put(UtilActions.queryLanguagesLevelSuccess(datalevel))
  } else {
    yield put(UtilActions.queryLanguagesLevelFailure(response.data.error.userMessage))
  }
}

export function * getSkillLevel (api, action) {
  const group = action.dataSkillLevel
  // make the call to the api
  const response = yield call(api.getConstFormularies, group)
  if (response.ok) {
    // do data conversion here if needed
    const data = response.data.data
    const datalevel = data
    yield put(UtilActions.querySkillLevelSuccess(datalevel))
  } else {
    yield put(UtilActions.querySkillLevelFailure(response.data.error.userMessage))
  }
}
