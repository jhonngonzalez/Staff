// a library to wrap and simplify api calls
import apisauce from 'apisauce'

import config from '../Config/AppConfig'
// our "constructor"

const create = (baseURL = config.apiConfig.host) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  // const getUser = (username) => api.get('search/users', {q: username})
  const getSign = (user) => {
    console.log('user_', user)
    return api.post('/users', user)
  }
  const getPreLogin = (user) => {
    console.log('user_', user)
    return api.post('/preLogin', user)
  }
  const getLogin = (user) => {
    console.log('user_', user)
    return api.post('/login', user)
  }
  const getForgot = (user) => {
    console.log('user_', user)
    return api.post('/users/forgot-password', user)
  }
  const getReset = (user) => {
    console.log('user_', user)
    return api.post('/users/reset-password/', user)
  }

  const getToken = (user) => {
    console.log('user_', user)
    return api.get('/users/validate-token/'+user.code, user)
  }

  const getProfile = (user) => {
    console.log('user_', user)
    return api.get('/users/me', null , {headers: {'Authorization': 'Bearer '+user.token}})
  }

  const getConstFormularies = (group) => {
    console.log('group_', group)
    return api.get('/formularies', group)
  }

  const getUpdateProfile = (user) => {
    console.log('user_', user)
    return api.put('/users', user)
  }

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRoot,
    getRate,
    getSign,
    getPreLogin,
    getLogin,
    getForgot,
    getReset,
    getToken,
    getProfile,
    getConstFormularies,
    getUpdateProfile
  }
}

// let's return back our create method as the default.
export default {
  create
}
