'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const allArticlesFunc = function () {
  return $.ajax({
    url: config.apiUrl + '/articles',
    method: 'GET'
  })
}

const artByAuthorFunc = function () {
  return $.ajax({
    url: config.apiUrl + '/articles/' + store.user._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

const postArtFunc = function (postArt) {
  return $.ajax({
    url: config.apiUrl + '/article',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: postArt
  })
}

const postEditArtFunc = function (updateArt) {
  return $.ajax({
    url: config.apiUrl + '/article/' + store.artId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: updateArt
  })
}

const delArtFunc = function (artId) {
  console.log('events', store.artId, 'token', store.user.token)
  return $.ajax({
    url: config.apiUrl + '/article/' + store.artId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  allArticlesFunc, artByAuthorFunc, postArtFunc, delArtFunc, postEditArtFunc
}
