import { emitter } from 'src/utils/emitter'

/* eslint-disable */
export default () => {
  localStorage.removeItem('previousPath')
  // Initial loading animation on html.js
  const html = document.querySelector("html")
  const transition = document.getElementById("___transition")
  const loader = document.getElementById("___loader")
  // Stop body scrolling
  html.style.overflow = "hidden"
  const preventScroll = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  html.addEventListener("ontouchstart", preventScroll)
  html.addEventListener("ontouchend", preventScroll)
  transition.style.opacity = "1"
  transition.style.visibility = "visible"
  setTimeout(function() {
    loader.style.opacity = "0"
    loader.style.visibility = "hidden"
    transition.style.opacity = "0"
    transition.style.visibility = "hidden"
    // Restart body scrolling
    html.style.overflow = "auto"
    html.removeEventListener("ontouchstart", preventScroll)
    html.removeEventListener("ontouchend", preventScroll)
      setTimeout(function() {
      loader.style.display = "none"
      emitter.emit('loading-finished-event')
    }, 1200)
  }, 2000)
}
