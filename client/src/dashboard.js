const view = document.getElementById("body_view")
const contents = document.getElementById("courses_content")
const free = document.getElementById("free_courses_content")
const paid = document.getElementById("paid_courses_content")
const video = document.getElementById("video_courses_content")
const article = document.getElementById("article_courses_content")

document.getElementById("courses").addEventListener("click", function () {
  console.log('courses')
  contents.style.display = "block"
  view.style.display = "none"
  video.style.display = "none"
  free.style.display = "none"
  article.style.display = "none"
  paid.style.display = "none"
})

document.getElementById("free").addEventListener("click", function () {
  console.log('Free')
  free.style.display = "block"
  view.style.display = "none"
  contents.style.display = "none"
  video.style.display = "none"
  article.style.display = "none"
  paid.style.display = "none"
})

document.getElementById("paid").addEventListener("click", function () {
  console.log('Paid')
  paid.style.display = "block"
  view.style.display = "none"
  free.style.display = "none"
  contents.style.display = "none"
  video.style.display = "none"
  article.style.display = "none"
})

document.getElementById("video").addEventListener("click", function () {
  console.log('Video')
  video.style.display = "block"
  view.style.display = "none"
  paid.style.display = "none"
  free.style.display = "none"
  contents.style.display = "none"
  article.style.display = "none"
  
})

document.getElementById("article").addEventListener("click", function () {
  console.log('Article')
  article.style.display = "block"
  view.style.display = "none"
  video.style.display = "none"
  free.style.display = "none"
  paid.style.display = "none"
  contents.style.display = "none"
})

document.getElementById("logout").addEventListener("click", function () {
  console.log('Logged out')
  view.style.display = "none"
})