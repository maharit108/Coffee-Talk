'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const artApi = require('./artApi')
const artUi = require('./artUi')

const artByAuthor = function (event) {
  event.preventDefault()
  artApi.artByAuthorFunc()
    .then(artUi.artByAuthSuc)
    .catch(artUi.artByAuthFail)
}

const allArticles = function () {
  artApi.allArticlesFunc()
    .then(artUi.allArtSuc)
    .catch(artUi.allArtFail)
}

module.exports = {
  artByAuthor, allArticles
}
