'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createComFunc = function (comData) {
  return $.ajax({
    url: config.apiUrl + '/comment/' + store.artId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: comData
  })
}

const deleteComFunc = function () {
  return $.ajax({
    url: config.apiUrl + '/comment/' + store.comId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

const editComFunc = function (comData) {
  return $.ajax({
    url: config.apiUrl + '/comment/' + store.comId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: comData
  })
}

module.exports = {
  createComFunc, deleteComFunc, editComFunc
}
