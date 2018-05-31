import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
	singUp: ['email', 'password' , 'role']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const SINGUP_STATE = Immutable({
	usercreated: false,
	companyname: '',
	email: '',
	password: '',
	confirm: '',
	role: ''
})

/* ------------- Reducers ------------- */

export const singup = function(state, action) {
	switch(action.type){
		case 'singup':
			return Object.assign({}, state, {
	  		usercreated: true
			}
    	this.props.navigation.navigate('Profile');
		default:
			return state;
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(SINGUP_STATE, {
  [Types.SIGN_UP]: singup
})
