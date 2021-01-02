/* eslint-disable */

module.exports = ({ prevLocation }) => {
  if (prevLocation) {
    localStorage.setItem('previousPath', prevLocation.pathname)
  }
  // Add aspect ratio for videos like Youtube.
  let iframes = Array.from(document.querySelectorAll('iframe'))
  iframes.map(el => {
    function onIframeLoad() {
      el.parentElement.classList.add("aspect-w-16", "aspect-h-9")
      el.removeEventListener('load', onIframeLoad)
    }
    el.addEventListener('load', onIframeLoad)
  })
}
