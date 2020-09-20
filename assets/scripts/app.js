'use strict'

const authEvents = require('./auth/authEvents')
const artEvents = require('./articles/artEvents')
const comEvents = require('./comments/comEvents')
const store = require('./store.js')

$(() => {
  // your JS code goes here

  artEvents.allArticles()
  $('.logo').on('click', artEvents.allArticles)

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
    $('#signUp').trigger('reset')
  })
  $('.in').on('click', () => {
    $('#signUp').hide()
    $('.in').hide()
    $('#signIn').add('.frontMsg').add('.up').show()
    $('.msg').text('')
    $('#signIn').trigger('reset')
  })

  $('#showMyArt').on('click', artEvents.artByAuthor)

  $('#delCom').add('#editComOpen').hide()
  $('#editArt').add('#deleteArticle').add('#createCom').hide()

  $('#addArt').on('click', artEvents.addArtClick)
  $('.addArtArea').hide()

  $('#addCancel').add('.returnToMag').on('click', () => {
    $('.magazine').add('.side').add('#nav').add('.menu').show()
    $('.addArtArea').hide()
    $('#writeArt').val('')
  })
  $('.returnToMag').hide()
  $('#postArt').on('click', artEvents.postMyArt)

  $('#editArt').on('click', artEvents.editArtClick)

  $('.magazine').on('click', '.comment', (event) => {
    event.stopPropagation()
    store.comId = event.target.id
    store.comCont = $(event.target.children[1]).text()
    store.comAuth = $(event.target.children[0]).text()
    console.log(store.comId, store.comCont, store.comAuth)
    comEvents.combtnshow()
  })
  $('.magazine').on('click', '.comauthor, .comcontent', (event) => {
    event.stopPropagation()
    const commentDiv = $(event.target).parent()[0]
    store.comId = commentDiv.id
    const comAuthorAndContent = $(commentDiv).text().split('\n')
    store.comCont = comAuthorAndContent.splice(2, comAuthorAndContent.length - 1).join('\n')
    store.comAuth = comAuthorAndContent.splice(1, 1).join('\n')
    console.log(store.comId, store.comCont, store.comAuth)
    comEvents.combtnshow()
  })

  $('.magazine').on('click', '.rating, .author, .topic', (event) => {
    event.stopPropagation()
    const artDiv = $(event.target).parent()[0]
    store.artId = artDiv.id
    const arttopic = $(artDiv).children()
    store.artCont = $(arttopic[1]).text()
    store.artAuth = $(arttopic[0]).text()
    console.log(store.artCont, store.artId, store.artAuth)
  })
  $('.magazine').on('click', '.voteshow', (event) => {
    event.stopPropagation()
    const voteDiv = $(event.target).parent().parent().parent()[0]
    store.artId = voteDiv.id
    const arttopic = $(voteDiv).children()
    store.artCont = $(arttopic[1]).text()
    store.artAuth = $(arttopic[0]).text()
    console.log(store.artId, store.artCont, store.artAuth)
  })
  $('.magazine').on('click', '.votes', (event) => {
    event.stopPropagation()
    const voteDiv = $(event.target).parent().parent().parent()[0]
    store.artId = voteDiv.id
    const arttopic = $(voteDiv).children()
    store.artCont = $(arttopic[1]).text()
    store.artAuth = $(arttopic[0]).text()
    console.log(store.artId, store.artCont, store.artAuth)
  })
  $('.magazine').on('click', '.rev', (event) => {
    event.stopPropagation()
    const voteDiv = $(event.target).parent().parent()[0]
    store.artId = voteDiv.id
    const arttopic = $(voteDiv).children()
    store.artCont = $(arttopic[1]).text()
    store.artAuth = $(arttopic[0]).text()
    console.log(store.artId, store.artCont, store.artAuth)
  })

  $('.magazine').delegate('.art', 'click', () => {
    store.artId = event.target.id
    store.artCont = $(event.target.children[1]).text()
    store.artAuth = $(event.target.children[0]).text()
    console.log(store.artId, store.artCont, store.artAuth)
  })
  $('#deleteArticle').on('click', artEvents.delArt)
  $('#postEditArt').on('click', artEvents.postEditArticle)

  $('.comAdd').hide()
  $('#createCom').on('click', () => {
    $('.comAdd').show()
    $('#postCom').add('#comCancel').add('#writeCom').add('.lab').show()
    $('.done').add('#editCom').hide()
    $('.comMsg').text('')
    $('#editArt').add('#deleteArticle').hide()
  })
  $('#comCancel').add('.done').on('click', () => {
    $('#writeCom').val('')
    $('.comAdd').hide()
    $('#editArt').add('#deleteArticle').show()
  })
  $('#postCom').on('click', comEvents.createComment)
  $('#delCom').on('click', comEvents.deleteComment)
  $('#editCom').on('click', comEvents.editComment)
  $('#editComOpen').on('click', () => {
    $('#writeCom').val(store.comCont)
    $('.comAdd').show()
    $('#editCom').add('#comCancel').add('#writeCom').add('.lab').show()
    $('.done').add('#postCom').hide()
    $('.comMsg').text('')
    $('#editArt').add('#deleteArticle').hide()
  })
})
