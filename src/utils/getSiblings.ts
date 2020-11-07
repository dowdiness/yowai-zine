// Get sibilings
const getSiblings = (e: Element) => {
  // for collecting siblings
  const siblings: ChildNode[] = []
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings
  }
  // warning if your parent node doesn't have child node
  if (!e.parentNode.firstChild) {
    console.warn("Your element passed to getSiblings doesn't have ChildNode.")
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling)
    }
    sibling = sibling.nextSibling
  }
  return siblings
}

export default getSiblings
