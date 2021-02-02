const convertRemToPx = (rem: number) => {
  var fontSize = getComputedStyle(document.documentElement).fontSize
  return rem * parseFloat(fontSize)
}

export default convertRemToPx
