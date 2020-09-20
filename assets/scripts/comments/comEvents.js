'use strict'

const store = require('./../store.js')
const comApi = require('./comApi')
const comUi = require('./comUi')
const artUi = require('./../articles/artUi')

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
    .catch(artUi.postArtFail)
}

const deleteComment = function () {
  comApi.deleteComFunc()
    .then(comUi.delComSuc)
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
    .catch(artUi.postArtFail)
}

const combtnshow = function () {
  console.log('Events', store.email, store.comAuth)
  if (store.email === store.comAuth) {
    $('#delCom').add('#editComOpen').show()
    $('#editArt').add('#deleteArticle').add('#createCom').hide()
  } else {
    $('#delCom').add('#editComOpen').hide()
    $('#editArt').add('#deleteArticle').add('#createCom').hide()
  }
}

module.exports = {
  createComment, deleteComment, editComment, combtnshow
}
