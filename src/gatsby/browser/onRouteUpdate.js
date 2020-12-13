/* eslint-disable */

module.exports = ({ prevLocation }) => {
  if (prevLocation) {
    localStorage.setItem('previousPath', prevLocation.pathname)
  }
}
