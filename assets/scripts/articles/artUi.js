'use strict'

const artSuc = function (response) {
  console.log(response)
  const artArr = response.article
  let showData = ''
  artArr.forEach(data => {
    let upV = 0
    let downV = 0
    const commentOfArt = data.comments
    console.log(commentOfArt)
    const authorOfArt = data.author
    let comhtml = ''
    showData += `
    <article class='art' id=${data._id}>
      <div id=${authorOfArt._id} class='author'>${authorOfArt.email}</div>
      <div class='topic'>${data.content} </div>
      <div class='rating'>
        <div class = 'rev'>
          <button class = 'votes btn-up'>Up</button>`
    // if undefined then !undefined gives true as undefined is falsy value
    if (!data.upvote) {
      upV = 0
      downV = 0
    } else {
      upV = data.upvote
      downV = data.downvote
    }
    showData += `<span class='voteshow upV'>${upV}</span>
        </div>
        <div class = 'rev'>
          <span class='voteshow downV'>${downV}</span>
          <button class = 'votes btn-down'>Down</button>
        </div>
      </div>
    `
    commentOfArt.forEach(comData => {
      comhtml += `
        <div id=${comData._id} class='comment'>
          <div class='comauthor' id=${comData.author}>${comData.author_name} </div>
          <p class='comcontent'>${comData.content}</p>
        </div>`
      return comhtml
    })
    showData += comhtml + '</article>'
    return showData
  })
  $('.magazine').html(showData)
}

const artFail = function () {
  console.log('Failed')
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
}

const delArtSuc = function () {
  console.log('deleted')
}

module.exports = {
  artSuc, artFail, postArtSuc, postArtFail, delArtSuc, postEditArtSuc
}
