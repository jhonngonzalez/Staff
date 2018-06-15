import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
	queryLanguagesRequest: ['dataLanguage'],
	queryLanguagesSuccess: ['response'],
	queryLanguagesFailure: ['error'],
	queryLanguagesLevelRequest: ['dataLanguageLevel'],
	queryLanguagesLevelSuccess: ['response'],
	queryLanguagesLevelFailure: ['error'],
	querySkillLevelRequest: ['dataSkillLevel'],
	querySkillLevelSuccess: ['response'],
	querySkillLevelFailure: ['error']
}, {})

/* ------------- Inital State ------------- */

export const INITIAL_STATE = Immutable({
	dataLanguage: [],
	dataLanguageLevel: [],
	dataSkillLevel: [],
	error: [],
	queryLanguageResults: [],
	queryLanguageLevelResults: [],
	querySkillLevelResults: []
})

/* ----- Reducers ---- */
export const queryLanguagesRequest = function(state, data){
	return state.merge({queryLanguageResults: data.datalanguage})
}

export const queryLanguagesSuccess = function(state, actionResults){
	return state.merge({queryLanguageResults: true, error: false, dataLanguage: actionResults})
}

export const queryLanguagesFailure = function(state, error){
	return state.merge({queryLanguageResults: false, error: error, dataLanguage: false})
}

export  const queryLanguagesLevelRequest = function(state, data){
	return state.merge({queryLanguageLevelResults: data.datalanguage})
}

export const queryLanguagesLevelSuccess = function(state, actionResults){
	return state.merge({queryLanguageLevelResults: true, error: false, dataLanguageLevel: actionResults})
}

export const queryLanguagesLevelFailure = function(state, error){
	return state.merge({queryLanguageLevelResults: false, error: error, dataLanguageLevel: false})
}

export  const querySkillLevelRequest = function(state, data){
	return state.merge({querySkillLevelResults: data.datalanguage})
}

export const querySkillLevelSuccess = function(state, actionResults){
	return state.merge({querySkillLevelResults: true, error: false, dataSkillLevel: actionResults})
}

export const querySkillLevelFailure = function(state, error){
	return state.merge({querySkillLevelResults: false, error: error, dataSkillLevel: false})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.QUERY_LANGUAGES_REQUEST]: queryLanguagesRequest,
	[Types.QUERY_LANGUAGES_SUCCESS]: queryLanguagesSuccess,
	[Types.QUERY_LANGUAGES_FAILURE]: queryLanguagesFailure,
	[Types.QUERY_LANGUAGES_LEVEL_REQUEST]: queryLanguagesLevelRequest,
	[Types.QUERY_LANGUAGES_LEVEL_SUCCESS]: queryLanguagesLevelSuccess,
	[Types.QUERY_LANGUAGES_LEVEL_FAILURE]: queryLanguagesLevelFailure,
	[Types.QUERY_SKILL_LEVEL_REQUEST]: querySkillLevelRequest,
	[Types.QUERY_SKILL_LEVEL_SUCCESS]: querySkillLevelSuccess,
	[Types.QUERY_SKILL_LEVEL_FAILURE]: querySkillLevelFailure
})

export const UtilTypes = Types
export default Creators