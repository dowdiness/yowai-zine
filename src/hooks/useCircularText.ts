import { useRef } from 'react'
import useIsomorphicLayoutEffect from 'src/hooks/useIsomorphicLayoutEffect'

const degreeToRadian = (angle: number) => {
  return angle * (Math.PI / 180);
}

const pointOnCircle = (radius: number, angle = 0) => {
  const xPos = radius * Math.cos(degreeToRadian(angle));
  const yPos = radius * Math.sin(degreeToRadian(angle));
  return {
      x: xPos,
      y: yPos
  }
}

const useCircularText = <T extends HTMLElement>(radius = 200, text: string) => {
  const circleTextRef = useRef<T>(null!)
  const diameter = radius * 2

  useIsomorphicLayoutEffect(() => {
    circleTextRef.current.style.width = `${diameter}px`
    circleTextRef.current.style.height = `${diameter}px`

    const characters = text.split('')
    circleTextRef.current.style.position = `relative`

    const startAngle = -90
    const endAngle = 270
    const angleRange = endAngle - startAngle

    const deltaAngle = angleRange / characters.length
    let currentAngle = startAngle

    while (circleTextRef.current.firstChild) {
      circleTextRef.current.removeChild(circleTextRef.current.firstChild);
    }

    characters.forEach((char, index) => {
      const charElement = document.createElement('span')
      charElement.style
      charElement.innerText = char
      circleTextRef.current.appendChild(charElement)

      let { x: xPos, y: yPos } = pointOnCircle(radius, currentAngle)

      /**
       * Move center of drawn circle to
       * match parents center.
       */
      xPos += radius
      yPos += radius

      const translate = `translate(${xPos}px, ${yPos}px)`
      const rotate = `rotate(${index * deltaAngle}deg)`

      charElement.style.transform = `${translate} ${rotate}`
      charElement.style.position = `absolute`
      charElement.style.transformOrigin = `top left`

      currentAngle += deltaAngle
    })

    return (() => {
    })
  }, [diameter])

  return { circleTextRef }
}

export default useCircularText
