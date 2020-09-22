'use strict'

const authEvents = require('./auth/authEvents')
const artEvents = require('./articles/artEvents')
const comEvents = require('./comments/comEvents')
const store = require('./store.js')

$(() => {
  // show all articles on document ready
  artEvents.allArticles()
  // logo click brings back all articles
  $('.logo').on('click', artEvents.allArticles)
  // authentiation process
  $('#signUp').on('submit', authEvents.sUpSubmit)
  $('#signIn').on('submit', authEvents.sInSubmit)
  $('#chPwd').on('submit', authEvents.chPwdSubmit)
  $('#signOut').on('click', authEvents.sOut)

  // sign up/ sign in view toggle
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
  // navbar menu toggle
  $('.menu').hide()
  $('.profile').mouseenter(() => {
    if (store.email) {
      $('.menu').show()
      $('.menu').mouseover(() => $('.menu').show())
    }
  })
  $('.profile').add('.menu').add('#nav').mouseout(() => $('.menu').hide())

  // pre sign-in hide views
  $('.msg').text('')
  $('#signUp').add('.in').add('.inside').hide()

  // hide all side buttons
  $('#chPwd').hide()
  allHideSide()

  // password hide/show toggle
  $('#chPwdBtn').on('click', () => {
    $('.msgin').text('')
    $('.msgin').hide()
    $('#chPwd').trigger('reset')
    $('#chPwd').toggle()
    allHideSide()
  })

  // Add article buttons hide that later show as necessary
  $('.addArtArea').hide()
  $('.returnToMag').hide()

  // Cancel and Close button of Add article
  $('#addCancel').add('.returnToMag').on('click', () => {
    $('.magazine').add('.side').add('#nav').add('.menu').show()
    $('.addArtArea').hide()
    $('#writeArt').hide()
    $('#writeArt').val('')
    $('#chPwd').hide()
    allHideSide()
  })
  // show article by author and create and post new article
  $('#showMyArt').on('click', artEvents.artByAuthor)
  $('#addArt').on('click', artEvents.addArtClick)
  $('#postArt').on('click', artEvents.postMyArt)
  // getting data from event targets; based on various parent/child divs of magazine
  $('.magazine').delegate('.art', 'click', () => {
    store.artId = event.target.id
    store.artCont = $(event.target.children[1]).text()
    store.artAuth = $(event.target.children[0]).text()
    artEvents.artbtnshow()
  })
  $('.magazine').on('click', '.rating, .author, .topic', (event) => {
    event.stopPropagation()
    const artDiv = $(event.target).parent()[0]
    store.artId = artDiv.id
    const arttopic = $(artDiv).children()
    store.artCont = $(arttopic[1]).text()
    store.artAuth = $(arttopic[0]).text()
    artEvents.artbtnshow()
  })
  $('.magazine').on('click', '.rev', (event) => {
    event.stopPropagation()
    const voteDiv = $(event.target).parent().parent()[0]
    store.artId = voteDiv.id
    const arttopic = $(voteDiv).children()
    store.artCont = $(arttopic[1]).text()
    store.artAuth = $(arttopic[0]).text()
    artEvents.artbtnshow()
  })
  $('.magazine').on('click', '.voteshow', (event) => {
    event.stopPropagation()
    const voteDiv = $(event.target).parent().parent().parent()[0]
    store.artId = voteDiv.id
    const arttopic = $(voteDiv).children()
    store.artCont = $(arttopic[1]).text()
    store.artAuth = $(arttopic[0]).text()
    artEvents.artbtnshow()
  })
  $('.magazine').on('click', '.votes', (event) => {
    event.stopPropagation()
    const voteDiv = $(event.target).parent().parent().parent()[0]
    store.artId = voteDiv.id
    const arttopic = $(voteDiv).children()
    store.artCont = $(arttopic[1]).text()
    store.artAuth = $(arttopic[0]).text()
    artEvents.artbtnshow()
  })
  $('.magazine').on('click', '.comment', (event) => {
    event.stopPropagation()
    store.comId = event.target.id
    store.comCont = $(event.target.children[1]).text()
    store.comAuth = $(event.target.children[0]).text()
    comEvents.combtnshow()
  })
  $('.magazine').on('click', '.comauthor, .comcontent', (event) => {
    event.stopPropagation()
    const commentDiv = $(event.target).parent()[0]
    store.comId = commentDiv.id
    const comAuthorAndContent = $(commentDiv).text().split('\n')
    store.comCont = comAuthorAndContent.splice(2, comAuthorAndContent.length - 1).join('\n')
    store.comAuth = comAuthorAndContent.splice(1, 1).join('\n')
    comEvents.combtnshow()
  })
  // edit, post edit and delete article
  $('#editArt').on('click', artEvents.editArtClick)
  $('#postEditArt').on('click', artEvents.postEditArticle)
  $('#deleteArticle').on('click', artEvents.delArt)
  // create comment button click
  $('.comBtnCreate').on('click', () => {
    allHideSide()
    $('.comMsg').text('')
    $('#writeCom').val('')
    $('.comAdd').add('.comMsg').add('.lab').add('#writeCom').add('.btnComEdits').add('#postCom').add('#comCancel').show()
  })
  // cancel comment create/edit
  // Done button after success of create/edit comment
  $('#comCancel').add('.done').on('click', () => {
    allHideSide()
  })
  // click create comment post
  $('#postCom').on('click', comEvents.createComment)
  // click on edit comment
  $('#editComOpen').on('click', () => {
    allHideSide()
    $('.comMsg').text('')
    $('#writeCom').val(store.comCont)
    $('.comAdd').add('.comMsg').add('.lab').add('#writeCom').add('.btnComEdits').add('#editCom').add('#comCancel').show()
  })
  // edit comment
  $('#editCom').on('click', comEvents.editComment)
  // delete comment
  $('#delCom').on('click', comEvents.deleteComment)

  // declare function that hide all side buttons
  function allHideSide () {
    $('.comBtnCreate').hide()
    $('.comAdd').add('.comMsg').add('.lab').add('#writeCom').add('.btnComEdits').add('#postCom').add('#editCom').add('#comCancel').hide()
    $('.done').hide()
    $('#com-btn').add('#delCom').add('#editComOpen').hide()
    $('.bArt').add('#editArt').add('#deleteArticle').hide()
  }
})
