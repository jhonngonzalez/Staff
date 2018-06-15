import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
	profileRequest: ['datauser'],
	profileSuccess: ['response'],
	profileFailure: ['error'],
	updateProfileRequest: ['datauser'],
	updateProfileSuccess: ['response'],
	updateProfileFailure: ['error']
}, {})

/* ------------- Inital State ------------- */

export const INITIAL_STATE = Immutable({
	datauser: [],
	error: [],
	profileResults: [],
	updateResult: [],
})

/* ------------- Reducers ------------- */

export const profileRequest = function(state, data){
	return state.merge({datauser: data.datauser})
}

export const profileSuccess = function(state, actionResults){
	return state.merge({profileResults: true, error: false, user: actionResults})
}

export const profileFailure = function(state, error){
	return state.merge({profileResults: false, error: error, user: false})
}

export const updateProfileRequest = function(state, data){
	return state.merge({datauser: data.datauser})
}

export const updateProfileSuccess = function(state, actionResults){
	return state.merge({updateResult: true, error: false, user: actionResults})
}

export const updateProfileFailure = function(state, error){
	return state.merge({updateResult: false, error: error, user: false})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.PROFILE_REQUEST]: profileRequest,
	[Types.PROFILE_SUCCESS]: profileSuccess,
	[Types.PROFILE_FAILURE]: profileFailure,
	[Types.UPDATE_PROFILE_REQUEST]: updateProfileRequest,
	[Types.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
	[Types.UPDATE_PROFILE_FAILURE]: updateProfileFailure
})

export const UserTypes = Types
export default Creators