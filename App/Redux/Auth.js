import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const datauser = {
	firstname: null,
	lastname: null,
	companyname: null,
	email: '',
	password: '',
	confirm: ''
}

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
	singUp: ['datauser', 'password' , 'namerole']
})

export const setState = function(value, idInput) {
	switch(idInput){
		case 'Name':
			datauser.companyname = value
		case 'Email':
			datauser.email = value
		case 'password':
			datauser.password = value
		case 'confirm':
			datauser.confirm	= value
		default:
			alert('Error of input name')
	}
}

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const SINGUP_STATE = Immutable({
	usercreated: {}
})

/* ------------- Reducers ------------- */

export const singup = function(state, action) {
	switch(action.type){
		case 'singUp':
			if(datauser.email != '' && datauser.password != '' && datauser.password === datauser.confirm){
				return usercreated = {email: datauser.email, role: 'freelancer'}
			}else{
				return state
			}
		default:
			return state
	}
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(SINGUP_STATE, {
  [Types.singUp]: singup
})
