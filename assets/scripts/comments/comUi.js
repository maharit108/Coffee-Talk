'use strict'

const createComSuc = function () {
  $('.comMsg').text('Your Comment Added')
  $('.done').show()
  $('#postCom').add('#comCancel').hide()
}

const editComSuc = function () {
  $('.comMsg').text('Update Posted')
  $('.done').show()
  $('#editCom').add('#comCancel').hide()
}

const delComSuc = function () {
  $('.comMsg').show()
  $('.comMsg').text('Deleted')
  $('.done').show()
}

const delComFail = function () {
  $('.comAdd').add('.comMsg').show()
  $('.comMsg').text("Couldn't Delete. Try Again Later")
  $('.done').show()
}

module.exports = {
  createComSuc, delComSuc, delComFail, editComSuc
}
