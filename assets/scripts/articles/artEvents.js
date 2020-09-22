'use strict'

const store = require('./../store.js')
const artApi = require('./artApi')
const artUi = require('./artUi')
// declare function that hide all side buttons
function allHideSide () {
  $('.comBtnCreate').hide()
  $('.comAdd').add('.comMsg').add('.lab').add('#writeCom').add('.btnComEdits').add('#postCom').add('#editCom').add('#comCancel').hide()
  $('.done').hide()
  $('#com-btn').add('#delCom').add('#editComOpen').hide()
  $('.bArt').add('#editArt').add('#deleteArticle').hide()
}

const allArticles = function () {
  artApi.allArticlesFunc()
    .then(artUi.artSuc)
    .catch(artUi.artFail)
}

const artByAuthor = function (event) {
  event.preventDefault()
  artApi.artByAuthorFunc()
    .then(artUi.artSuc)
    .catch(artUi.artFail)
}

const addArtClick = function () {
  $('.magazine').add('.side').add('#nav').add('.menu').hide()
  $('.addArtArea').add('#writeArt').show()
  $('#postArt').add('#addCancel').show()
  $('.returnToMag').add('#postEditArt').hide()
}

const postMyArt = function () {
  const postArt = {
    article: {
      content: $('#writeArt').val(),
      author: store.user.token
    }
  }
  artApi.postArtFunc(postArt)
    .then(artUi.postArtSuc)
    .then(allArticles)
    .catch(artUi.postArtFail)
}

const editArtClick = function () {
  $('#writeArt').val(store.artCont)
  $('.magazine').add('.side').add('#nav').add('.menu').hide()
  $('.addArtArea').add('#writeArt').show()
  $('.returnToMag').add('#postArt').hide()
  $('#postEditArt').add('#addCancel').show()
}

const postEditArticle = function () {
  const updateArt = {
    article: {
      content: $('#writeArt').val()
    }
  }
  artApi.postEditArtFunc(updateArt)
    .then(artUi.postEditArtSuc)
    .then(allArticles)
    .catch(artUi.postArtFail)
}

const delArt = function () {
  artApi.delArtFunc()
    .then(artUi.delArtSuc)
    .then(allArticles)
    .catch(artUi.artFail)
}

const artbtnshow = function () {
  $('#chPwd').hide()
  allHideSide()
  $('.comBtnCreate').show()
  console.log('artEvents', store.email, store.artAuth + ' ')
  console.log('artEvents', store.email.length, (store.artAuth + ' ').length)
  if (store.email === store.artAuth + ' ') {
    $('.bArt').add('#editArt').add('#deleteArticle').show()
  } else {
    $('.bArt').add('#editArt').add('#deleteArticle').hide()
  }
}

module.exports = {
  artByAuthor, allArticles, addArtClick, postMyArt, delArt, editArtClick, postEditArticle, artbtnshow
}
