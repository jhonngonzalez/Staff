import { createReducer, createActions, forgotcreateTypes } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
	signUpRequest: ['datauser'],
	signUpSuccess: ['response'],
	signUpFailure: ['error'],
	loginRequest: ['datauser'],
	loginSuccess: ['response'],
	loginFailure: ['error'],
	forgotRequest: ['datauser'],
	forgotSuccess: ['response'],
	forgotFailure: ['error'],
	resetRequest: ['datauser'],
	resetSuccess: ['response'],
	resetFailure: ['error']
}, {})

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
	signUpResults: [],
	loginResults: [],
	forgotResults: [],
	resetResults: [],
	error: []
})

/* ------------- Reducers ------------- */

export const signUpRequest = function(state, data) {
	console.log('signUpRequest', data)
	return state.merge({signUpResults: data.datauser})
}

export const signUpSuccess = function(state, actionResults){
	console.log('signUpRequestSUCCESS', actionResults)
	return state.merge({signUpResults: true, error: null, user: actionResults})
}

export const signUpFailure = function(state, error) {
	console.log('signUpRequestFailure', error)
	return state.merge({signUpResults: false, error: error, user: null})
}

export const loginRequest = function(state, data) {
	console.log('loginRequest', data)
	return state.merge({ loginResults: data.datauser})
}

export const loginSuccess = function(state, actionResults){
	console.log('loginRequestSUCCESS', actionResults)
	return state.merge({ loginResults: true, error: null, user: actionResults})
}

export const loginFailure = function(state, error) {
	console.log('loginRequestFailure', error)
	return state.merge({ loginResults: false, error: error, user: null})
}

export const forgotRequest = function(state, data) {
	console.log('forgotRequest', data)
	return state.merge({ forgotResults: data.datauser})
}

export const forgotSuccess = function(state, actionResults){
	console.log('forgotRequestSUCCESS', actionResults)
	return state.merge({ forgotResults: true, error: null, user: actionResults})
}

export const forgotFailure = function(state, error) {
	console.log('forgotRequestFailure', error)
	return state.merge({ forgotResults: false, error: error, user: null})
}

export const resetRequest = function(state, data) {
	console.log('resetRequest', data)
	return state.merge({ resetResults: data.datauser})
}

export const resetSuccess = function(state, actionResults){
	console.log('resetRequestSUCCESS', actionResults)
	return state.merge({ resetResults: true, error: null, user: actionResults})
}

export const resetFailure = function(state, error) {
	console.log('resetRequestFailure', error)
	return state.merge({ resetResults: false, error: error, user: null})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure, 
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure, 
  [Types.FORGOT_REQUEST]: forgotRequest,
  [Types.FORGOT_SUCCESS]: forgotSuccess,
  [Types.FORGOT_FAILURE]: forgotFailure, 
  [Types.RESET_REQUEST]: resetRequest,
  [Types.RESET_SUCCESS]: resetSuccess,
  [Types.RESET_FAILURE]: resetFailure
})

export const AuthTypes = Types
export default Creators