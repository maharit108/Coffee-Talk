'use strict'

const store = require('./../store.js')
const artApi = require('./artApi')
const artUi = require('./artUi')

const artByAuthor = function (event) {
  event.preventDefault()
  artApi.artByAuthorFunc()
    .then(artUi.artSuc)
    .catch(artUi.artFail)
}

const allArticles = function () {
  artApi.allArticlesFunc()
    .then(artUi.artSuc)
    .catch(artUi.artFail)
}

const addArtClick = function () {
  $('.magazine').add('.side').add('#nav').add('.menu').hide()
  $('.addArtArea').show()
  $('.returnToMag').add('#postEditArt').hide()
  $('#postArt').add('#addCancel').show()
}

const editArtClick = function () {
  $('.magazine').add('.side').add('#nav').add('.menu').hide()
  $('.addArtArea').show()
  $('.returnToMag').add('#postArt').hide()
  $('#postEditArt').add('#addCancel').show()
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
    .catch(artUi.postArtFail)
}

const delArt = function () {
  artApi.delArtFunc()
    .then(artUi.delArtSuc)
    .catch(artUi.artFail)
}

const postEditArticle = function () {
  const updateArt = {
    article: {
      content: $('#writeArt').val()
    }
  }
  artApi.postEditArtFunc(updateArt)
    .then(artUi.postEditArtSuc)
    .catch(artUi.postArtFail)
}

module.exports = {
  artByAuthor, allArticles, addArtClick, postMyArt, delArt, editArtClick, postEditArticle
}
