import { useEffect, useRef, EffectCallback, DependencyList } from "react"

// Reusable component that also takes dependencies
const useAnimationFrame = (animationCB: EffectCallback, deps: DependencyList) => {
  const frame = useRef<number>(0)

  const animate = () => {
    // In seconds ~> you can do ms or anything in userland
    animationCB()
    frame.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    frame.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame.current)
  }, deps) // Make sure to change it if the deps change
}

export default useAnimationFrame
