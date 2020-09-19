'use strict'

const authEvents = require('./auth/authEvents')
const artEvents = require('./articles/artEvents')

$(() => {
  // your JS code goes here
  artEvents.allArticles()
  $('#signUp').on('submit', authEvents.sUpSubmit)
  $('#signIn').on('submit', authEvents.sInSubmit)
  $('#chPwd').on('submit', authEvents.chPwdSubmit)
  $('#signOut').on('click', authEvents.sOut)

  $('#chPwdBtn').on('click', () => {
    $('.msgin').text('')
    $('#chPwd').trigger('reset')
    $('#chPwd').toggle()
  })

  $('.menu').add('#chPwd').add('msgin').hide()
  $('#signUp').add('.in').add('.inside').hide()
  $('.msg').text('')

  $('.up').on('click', () => {
    $('#signUp').show()
    $('.in').show()
    $('#signIn').add('.frontMsg').add('.up').hide()
    $('.msg').text('')
  })
  $('.in').on('click', () => {
    $('#signUp').hide()
    $('.in').hide()
    $('#signIn').add('.frontMsg').add('.up').show()
    $('.msg').text('')
  })
})
