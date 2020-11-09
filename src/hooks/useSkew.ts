import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const useSkew = (skewElementSelectors: string) => {
  const proxy = { skew: 0 },
    clamp = gsap.utils.clamp(-30, 30) // don't let the skew go beyond 20 degrees.

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const skewSetter = gsap.quickSetter(skewElementSelectors, 'skewY', 'deg') // fast

    ScrollTrigger.create({
      onUpdate: self => {
        const skew = clamp(self.getVelocity() / -200)
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          })
        }
      },
    })

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(skewElementSelectors, { transformOrigin: 'right center', force3D: true })

  })
}

export default useSkew
