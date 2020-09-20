'use strict'

const createComSuc = function () {
  $('.comMsg').text('Your Comment Added')
  $('.done').show()
  $('#postCom').add('#comCancel').add('#writeCom').add('.lab').hide()
}

const delComSuc = function () {
  $('#comMsgBoard').text('Deleted')
}

const delComFail = function () {
  $('#comMsgBoard').text("Couldn't Delete at this time")
}

const editComSuc = function () {
  $('.comMsg').text('Update Posted')
  $('.done').show()
  $('#postCom').add('#comCancel').add('#writeCom').add('#editCom').add('.lab').hide()
}

module.exports = {
  createComSuc, delComSuc, delComFail, editComSuc
}
