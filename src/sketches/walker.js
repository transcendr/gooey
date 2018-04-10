import p5 from 'p5'
import 'p5/lib/addons/p5.sound'
import 'p5/lib/addons/p5.dom'
import MVector from '../modules/MVector.js'
// import drawStars from './modules/drawStars';
// import Star from './modules/Star'

// Sketch scope
let walker = (p5) => {
  // Variables scoped within p5
  this.walkers = []
  this.backgroundColor = 51
  // const d = new Star(500, 300, 4);

  p5.setup = () => {
    const canvasWidth = document.getElementById('renderer').offsetWidth // p5.windowWidth
    const canvasHeight = document.getElementById('renderer').offsetHeight // p5.windowHeight
    const canvas = this.canvas = p5.createCanvas(canvasWidth, canvasHeight)
    canvas.parent('sketch')
    p5.background(this.backgroundColor)
    // p5.frameRate(100)

    for (let i = 0; i < 10; i++) {
      const rx = p5.random(-p5.windowWidth / 2, p5.windowWidth / 2)
      const ry = p5.random(-p5.windowHeight / 2, p5.windowHeight / 2)
      this.walkers.push(new MVector(window.P5, 'pont', [rx, ry, 0], [0, 0]))
    }

    setTimeout(function () {
      p5.cleanUp()
    }, 600000)
  }

  p5.windowResized = () => {
    const canvasWidth = document.getElementById('renderer').offsetWidth // p5.windowWidth
    const canvasHeight = document.getElementById('renderer').offsetHeight // p5.windowHeight
    p5.resizeCanvas(canvasWidth, canvasHeight)
  }

  p5.setBackground = (value) => {
    this.backgroundColor = p5.int(value)
    console.log('set background to', this.backgroundColor)
    p5.background(this.backgroundColor)
  }

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.background(this.backgroundColor)
    p5.translate(p5.width / 2, p5.height / 2)
    // drawStars(100)
    // p5.ellipse(0, 0, 20)
    const rx = p5.windowWidth / 20
    const ry = p5.windowHeight / 20

    for (let i = 0; i < this.walkers.length; i++) {
      const offx = p5.random(2) > 1 ? p5.random(0, 10000) : -p5.random(0, 10000)
      const offy = p5.random(2) > 1 ? p5.random(0, 1000) : -p5.random(0, 1000)
      this.walkers[i].applyForce('random', {
        type: 'noise', // random, noise
        range: [-rx, rx, -ry, ry],
        noff: {o: [p5.random(0, 10000), p5.random(0, 1000)], i: p5.random(0, 0.1)},
        accel: {type: 'random', range: [0, 125]},
        cts: true
      })
      p5.ellipse(this.walkers[i].x, this.walkers[i].y, 40)
    }

    // p5.ellipse(this.v.x, this.v.y, 20)
    p5.strokeWeight(4)
    // p5.constrain(this.v.x, -p5.windowWidth / 2 + 100, p5.windowWidth / 2 - 100)
    // p5.constrain(this.v.y, -p5.windowHeight / 2 + 100, p5.windowHeight / 2 - 100)
    // p5.line(this.v.px, this.v.py, this.v.x, this.v.y)
    // p5.ellipse(this.v.x, this.v.y, 40)
    // console.log(`px ${this.v.px} x ${this.v.x}`)
  }

  p5.cleanUp = () => {
    console.log(`Pre-cleanup memory: ${window.performance.memory.totalJSHeapSize}`)
    for (let i = 0; i < this.walkers.length; i++) {
      this.walkers[i].cleanup()
    }
    p5.noLoop()
    console.log(`Post-cleanup memory: ${window.performance.memory.totalJSHeapSize}`)
    // p5.saveCanvas(this.canvas, 'myCanvas', 'jpg')
  }
}

const P5 = window.p5 = p5
walker = window.P5 = new P5(walker)

export default walker
