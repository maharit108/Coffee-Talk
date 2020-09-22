'use strict'

const store = require('./../store.js')
const comApi = require('./comApi')
const comUi = require('./comUi')
const artUi = require('./../articles/artUi')
const artEvents = require('./../articles/artEvents')

// declare function that hide all side buttons
function allHideSide () {
  $('.comBtnCreate').hide()
  $('.comAdd').add('.comMsg').add('.lab').add('#writeCom').add('.btnComEdits').add('#postCom').add('#editCom').add('#comCancel').hide()
  $('.done').hide()
  $('#com-btn').add('#delCom').add('#editComOpen').hide()
  $('.bArt').add('#editArt').add('#deleteArticle').hide()
}

const createComment = function () {
  const comData = {
    comments: {
      content: $('#writeCom').val(),
      author: store.user.token,
      author_name: store.user.token
    }
  }
  comApi.createComFunc(comData)
    .then(comUi.createComSuc)
    .then(artEvents.allArticles)
    .catch(artUi.postArtFail)
}

const deleteComment = function () {
  allHideSide()
  comApi.deleteComFunc()
    .then(comUi.delComSuc)
    .then(artEvents.allArticles)
    .catch(comUi.delComFail)
}

const editComment = function () {
  const comData = {
    comments: {
      content: $('#writeCom').val(),
      author: store.user.token
    }
  }
  comApi.editComFunc(comData)
    .then(comUi.editComSuc)
    .then(artEvents.allArticles)
    .catch(artUi.postArtFail)
}

const combtnshow = function () {
  $('#chPwd').hide()
  allHideSide()
  $('.comBtnCreate').show()
  if (store.email === store.comAuth) {
    $('#com-btn').add('#delCom').add('#editComOpen').show()
    // $('#editArt').add('#deleteArticle').hide()
  } else {
    $('#com-btn').add('#delCom').add('#editComOpen').hide()
  }
}

module.exports = {
  createComment, deleteComment, editComment, combtnshow
}
