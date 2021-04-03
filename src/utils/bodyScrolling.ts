const preventScroll = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
}

export const stopBodyScrolling = () => {
  const html = document.querySelector("html")
  if (html) {
    html.style.overflow = "hidden"
    html.addEventListener("ontouchstart", preventScroll)
    html.addEventListener("ontouchend", preventScroll)
  }
}

export const restartBodyScrolling = () => {
  const html = document.querySelector("html")
  if (html) {
    html.style.overflow = "auto"
    html.removeEventListener("ontouchstart", preventScroll)
    html.removeEventListener("ontouchend", preventScroll)
  }
}
