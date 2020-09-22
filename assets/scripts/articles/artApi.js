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
  return $.ajax({
    url: config.apiUrl + '/article/' + store.artId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

const votePostFunc = function () {
  if (store.vote === 'up') {
    store.up = Number(store.up) + 1
  } else if (store.vote === 'down') {
    store.down = Number(store.down) + 1
  } else {
    console.log()
  }
  return $.ajax({
    url: config.apiUrl + '/articleVote/' + store.artId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: {
      article: {
        upvote: store.up,
        downvote: store.down,
        voter_name: store.email
      }
    }
  })
}
module.exports = {
  allArticlesFunc, artByAuthorFunc, postArtFunc, delArtFunc, postEditArtFunc, votePostFunc
}
