'use strict'

const config = require('./../config.js')
// const store = require('./../store.js')

const allArticlesFunc = function () {
  return $.ajax({
    url: config.apiUrl + '/articles',
    method: 'GET'
  })
}

const artByAuthorFunc = function () {
  return $.ajax({
    // url: config.apiUrl + '/articles',
    method: 'GET'
  })
}

module.exports = {
  allArticlesFunc, artByAuthorFunc
}
