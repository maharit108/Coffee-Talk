'use strict'

const store = require('./../store')
const artEvents = require('./../articles/artEvents')

const sUpSuc = function (response) {
  $('#signUp').add('.in').hide()
  $('#signIn').show()
  $('.msg').text("You're ready!!! Sign In Now")
  $('.up').show()
}

const sUpFail = function (response) {
  $('.msg').text('Sign Up Failed. Try Again with Another Email and Password')
  $('.up').hide()
}

const sInSuc = function (response) {
  store.email = response.user.email + ' '
  store.user = response.user
  $('.outside').add('.in').hide()
  $('.menu').add('.inside').show()
}

const sInFail = function (response) {
  $('.msg').text("Couldn't Sign In. Check email and Password")
  $('.in').hide()
}

const chPwdSuc = function () {
  $('#chPwd').hide()
  $('.msgin').show()
  $('.msgin').text('Changed')
  $('.msgin').hide(8000)
}

const chPwdFail = function () {
  $('.msgin').show()
  $('.msgin').text("Couldn't change Password. Try Again")
  $('.msgin').hide(5000)
}

const sOutSuc = function () {
  artEvents.allArticles()
  $('.outside').show()
  $('.menu').add('.inside').add('#chPwd').hide()
  $('.msgin').text('')
  store.email = undefined
}

const sOutFail = function () {
  $('.msgin').show()
  $('.msgin').text('Operation Failed. Try Again')
  $('.msgin').hide(5000)
}

module.exports = {
  sUpFail, sUpSuc, sInSuc, sInFail, chPwdSuc, chPwdFail, sOutSuc, sOutFail
}
