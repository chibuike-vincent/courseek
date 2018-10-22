
let courses = document.getElementById("courselist");
console.log(document.getElementById("courselist"))
console.log("courses")
courses.addEventListener("click", function () {
  fetch("https://www.udacity.com/public-api/v1/courses", {
      method:'post',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Origin': 'https://www.udacity.com/public-api/v1/courses',
        'Access-Control-Allow-Origin': 'https://www.udacity.com/public-api/v1/courses'

      }
    })
    .then((blob) => blob.json())
    .then((res) => console.log("here are your courses", res))
    .catch((err) => console.log("couldn't reach courses", err))
})