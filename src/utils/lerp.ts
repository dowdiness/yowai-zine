// Linear interpolation
const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b

export default lerp
