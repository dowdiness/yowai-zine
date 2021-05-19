async function loadPolyfills() {
  const smoothscroll = await import('smoothscroll-polyfill')
  smoothscroll.polyfill()
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer')
  }
}

const onClientEntry = () => {
  loadPolyfills()
}

export default onClientEntry
