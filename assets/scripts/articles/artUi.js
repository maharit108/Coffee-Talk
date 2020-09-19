'use strict'

const allArtSuc = function (response) {
  console.log(response.article)
  const artArr = response.article
  let showData = ''
  artArr.forEach(data => {
    let upV = 0
    let downV = 0
    const commentOfArt = data.comments
    const authorOfArt = data.author
    let comhtml = ''
    showData += `
    <article id=${data._id}>
      <div id=${authorOfArt._id} class='author'>${authorOfArt.email}</div>
      <div class='topic'>${data.content} </div>
      <div class='rating'>
        <div class = 'rev'>
          <button class = 'btn-up'>Up</button>`
    // if undefined then !undefined gives true as undefined is falsy value
    if (!data.upvote) {
      upV = 0
      downV = 0
    } else {
      upV = data.upvote
      downV = data.downvote
    }
    showData += `<span class='upV'>${upV}</span>
        </div>
        <div class = 'rev'>
          <span class='downV'>${downV}</span>
          <button class = 'btn-down'>Down</button>
        </div>
      </div>
    `
    commentOfArt.forEach(comData => {
      comhtml += `
        <div id=${comData._id} class='comment'>
          <div class='comauthor'>${comData.author} </div>
          <p class='comcontent'>${comData.content}</p>
        </div>`
      return comhtml
    })
    showData += comhtml + '</article>'
    return showData
  })
  $('.magazine').html(showData)
}

const allArtFail = function () {
  console.log('Failed')
}

module.exports = {
  allArtSuc, allArtFail
}
