import smoothscroll from 'smoothscroll-polyfill';

async function loadPolyfills() {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }
}

const onClientEntry = () => {
  smoothscroll.polyfill()
  loadPolyfills()
}

export default onClientEntry
