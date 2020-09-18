'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const authApi = require('./authApi')
const authUi = require('./authUi')

const sUpSubmit = function (event) {
  console.log('eve 1')
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    console.log('eve 2')
    $('.msg').text("Passwords don't Match")
    $('#signUp').trigger('reset')
  } else {
    $('#signUp').trigger('reset')
    console.log('eve 3')
    authApi.sUpFunc(data)
      .then(authUi.sUpSuc)
      .catch(authUi.sUpFail)
  }
}

const sInSubmit = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  $('#signIn').trigger('reset')
  authApi.sInFunc(data)
    .then(authUi.sInSuc)
    .catch(authUi.sInFail)
}

const chPwdSubmit = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  $('#chPwd').trigger('reset')
  authApi.chPwdFunc(data)
    .then(authUi.chPwdSuc)
    .catch(authUi.chPwdFail)
}

const sOut = function (event) {
  event.preventDefault()
  authApi.sOutFunc()
    .then(authUi.sOutSuc)
    .catch(authUi.sOutFail)
}

module.exports = {
  sUpSubmit, sInSubmit, chPwdSubmit, sOut
}
