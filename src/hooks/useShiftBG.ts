import { useRef } from 'react'
import useIsomorphicLayoutEffect from 'src/hooks/useIsomorphicLayoutEffect'
import SimplexNoise from 'simplex-noise'

const { PI, cos, sin, abs, random } = Math
const TAU = 2 * PI
const rand = (n: number) => n * random()
const fadeInOut = (t: number, m: number) => {
	let hm = 0.5 * m
	return abs((t + hm) % m - hm) / (hm)
}

const circleCount = 150
const circlePropCount = 8
const circlePropsLength = circleCount * circlePropCount
const baseSpeed = 0.1
const rangeSpeed = 1
const baseTTL = 150
const rangeTTL = 200
const baseRadius = 100
const rangeRadius = 200
const rangeHue = 60
const xOff = 0.0015
const yOff = 0.0015
const zOff = 0.0015
const backgroundColor = 'hsla(0,0%,5%,1)'

let canvas: { a: HTMLCanvasElement; b: HTMLCanvasElement; }
let ctx: { a: CanvasRenderingContext2D; b: CanvasRenderingContext2D; }
let circleProps: Float32Array
let simplex: SimplexNoise
let baseHue: number

function initCircles() {
  circleProps = new Float32Array(circlePropsLength)
  simplex = new SimplexNoise()
  baseHue = 220

  let i

  for (i = 0; i < circlePropsLength; i += circlePropCount) {
    initCircle(i)
  }
}

function initCircle(i: number) {
  const x = rand(canvas.a.width)
  const y = rand(canvas.a.height)
  const n = simplex.noise3D(x * xOff, y * yOff, baseHue * zOff)
  const t = rand(TAU)
  const speed = baseSpeed + rand(rangeSpeed)
  const vx = speed * cos(t)
  const vy = speed * sin(t)
  const life = 0
  const ttl = baseTTL + rand(rangeTTL)
  const radius = baseRadius + rand(rangeRadius)
  const hue = baseHue + n * rangeHue

  circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i)
}

function updateCircles() {
  let i

  baseHue++

  for (i = 0; i < circlePropsLength; i += circlePropCount) {
    updateCircle(i)
  }
}

function updateCircle(i: number) {
  let i2=1+i, i3=2+i, i4=3+i, i5=4+i, i6=5+i, i7=6+i, i8=7+i
  let x, y, vx, vy, ttl, radius, hue

  x = circleProps[i]
  y = circleProps[i2]
  vx = circleProps[i3]
  vy = circleProps[i4]
  let life = circleProps[i5]
  ttl = circleProps[i6]
  radius = circleProps[i7]
  hue = circleProps[i8]

  drawCircle(x, y, life, ttl, radius, hue)

  life++

  circleProps[i] = x + vx
  circleProps[i2] = y + vy
  circleProps[i5] = life;

  (checkBounds(x, y, radius) || life > ttl) && initCircle(i)
}

function drawCircle(x: number, y: number, life: number, ttl: number, radius: number, hue: number) {
  ctx.a?.save()
  ctx.a.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(life,ttl)})`
  ctx.a?.beginPath()
  ctx.a?.arc(x,y, radius, 0, TAU)
  ctx.a?.fill()
  ctx.a?.closePath()
  ctx.a?.restore()
}

function checkBounds(x: number, y: number, radius: number) {
  return (
    x < -radius ||
    x > canvas.a.width + radius ||
    y < -radius ||
    y > canvas.a.height + radius
  )
}

// coearce `CanvasRenderingContext2D | null` to `CanvasRenderingContext2D` returned from HTMLCanvasElement.getContext
const getContext = (can: HTMLCanvasElement): CanvasRenderingContext2D => {
  return can.getContext('2d') as any
}

function createCanvas(el: HTMLElement) {
  const container = el
	canvas = {
		a: document.createElement('canvas'),
		b: document.createElement('canvas')
	}
	canvas.b.setAttribute('style',`
		position: fixed
		top: 0
		left: 0
		width: 100%
		height: 100%
	`)
	container.appendChild(canvas.b)
	ctx = {
		a: getContext(canvas.a),
		b: getContext(canvas.b)
	}
}

function resize(innerWidth: number, innerHeight: number) {
	canvas.a.width = innerWidth
  canvas.a.height = innerHeight

  ctx.a?.drawImage(canvas.b, 0, 0)

	canvas.b.width = innerWidth
  canvas.b.height = innerHeight

  ctx.b?.drawImage(canvas.a, 0, 0)
}

function render() {
  ctx.b?.save()
  ctx.b.filter = 'blur(50px)'
  ctx.b?.drawImage(canvas.a, 0, 0)
  ctx.b?.restore()
}

function draw() {
  ctx.a?.clearRect(0, 0, canvas.a.width, canvas.a.height)
  ctx.b.fillStyle = backgroundColor
  ctx.b?.fillRect(0, 0, canvas.b.width, canvas.b.height)
  updateCircles()
  render()
	requestAnimationFrame(draw)
}

const useShiftBG = <T extends HTMLElement>(w: number, h: number) => {
  const canvasRef = useRef<T>(null!)

  useIsomorphicLayoutEffect(() => {
    const resizeHander = () => resize(w, h)

    console.log('setup starts')
    createCanvas(canvasRef.current)
    resize(w, h)
    initCircles()
    draw()
    console.log('setup ends')

    window.addEventListener('resize', resizeHander)
    return (() => {
      window.removeEventListener('resize', resizeHander)
    })
  })

  return { canvasRef }
}

export default useShiftBG
