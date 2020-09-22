'use strict'
const store = require('./../store.js')

const artSuc = function (response) {
  // <img class= 'btn-upImg' src='../../public/thumb-up-1426815_1280.png'>
  // <img class= 'btn-downImg' src='../../public/thumb-down-1426814_1280.png'>
  store.voteName = {}
  const artArr = response.article
  let showData = ''
  artArr.forEach(data => {
    let upV = 0
    let downV = 0
    const string = data.content
    const commentOfArt = data.comments
    const authorOfArt = data.author
    store.voteName[data._id] = data.voter_name
    let comhtml = ''
    showData += `
    <article class='art' id=${data._id}>
      <div id=${authorOfArt._id} class='author'>${authorOfArt.email}</div>
      <div class='topic'>${string} </div>
      <div class='rating'>
        <div class = 'rev'>
          <div class = 'votes btn-up'>
          <button class= 'btn-upImg'>&#128077</button>
          </div>`

    upV = data.upvote
    downV = data.downvote
    showData += `<span class='voteshow upV'>${upV}</span>
        </div>
        <div class = 'rev'>
          <span class='voteshow downV'>${downV}</span>
          <div class = 'votes btn-down'>
            <button class= 'btn-downImg'>&#128078</button>
          </div>
        </div>
      </div>
    `
    commentOfArt.forEach(comData => {
      const string = comData.content
      comhtml += `
        <div id=${comData._id} class='comment'>
          <div class='comauthor' id=${comData.author}>${comData.author_name} </div>
          <p class='comcontent'>${string}</p>
        </div>`
      return comhtml
    })
    showData += comhtml + '</article>'
    return showData
  })
  $('.magazine').html(showData)
}

const artFail = function () {
  $('.msgin').show()
  $('.msgin').text('No more Articles you Own')
  $('.msgin').hide(5000)
}

const postArtSuc = function () {
  $('.postMsg').text('Your Article has been Posted')
  $('#postArt').add('#addCancel').hide()
  $('.returnToMag').show()
}

const postEditArtSuc = function () {
  $('.postMsg').text('Your Article has been Updated')
  $('#postEditArt').add('#addCancel').hide()
  $('.returnToMag').show()
}

const postArtFail = function () {
  $('.postMsg').text("Couldn't Post at this time. Please try again later. ")
  $('.returnToMag').show()
}

const delArtSuc = function () {
  $('#chPwd').hide()
  allHideSide()
}

const votePostUi = function () {
  allHideSide()
}

// declare function that hide all side buttons
function allHideSide () {
  $('.comBtnCreate').hide()
  $('.comAdd').add('.comMsg').add('.lab').add('#writeCom').add('.btnComEdits').add('#postCom').add('#editCom').add('#comCancel').hide()
  $('.done').hide()
  $('#com-btn').add('#delCom').add('#editComOpen').hide()
  $('.bArt').add('#editArt').add('#deleteArticle').hide()
}
module.exports = {
  artSuc, artFail, postArtSuc, postArtFail, delArtSuc, postEditArtSuc, votePostUi
}
