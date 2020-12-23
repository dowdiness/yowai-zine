/* eslint-disable */
module.exports = () => {
  localStorage.removeItem('previousPath')
  // Initial loading animation on html.js
  const html = document.querySelector("html")
  const transition = document.getElementById("___transition")
  const loader = document.getElementById("___loader")
  // Stop body scrolling
  html.style.overflow = "hidden"
  html.ontouchstart = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  html.ontouchend = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  transition.style.opacity = "1"
  transition.style.visibility = "visible"
  setTimeout(function() {
    loader.style.opacity = "0"
    loader.style.visibility = "hidden"
    transition.style.opacity = "0"
    transition.style.visibility = "hidden"
    setTimeout(function() {
      loader.style.display = "none"
      // Restart body scrolling
      html.style.overflow = "auto"
      html.ontouchstart = null
      html.ontouchmove = null
    }, 1600)
  }, 4000)
}
