/**
 * P5 Vector helper class
 * Vectors are p5 elements that have both a direction and a magnitude.
 * The direction is the direction of it's current location to new location
 * It's magnitude is the measure of the distance between those two points
 * Vector objects describe 3 things: position, velocity, and acceleration
 * Position = it's current location vector.x / vector.y
 * Velocity = rate of position change per time unit
 * Acceleration = rate it's velocity changes per time unit
 */
import p5 from 'p5'
import 'p5/lib/addons/p5.sound'
import 'p5/lib/addons/p5.dom'
import Randomer from './Random'
// let P5 = p5
// P5 = window.p5 = new P5()

export default class MVector {
  constructor (instance, type, position, velocity) {
    this.p5 = instance
    this.rdm = new Randomer(instance)
    /* eslint-disable no-new */
    // new P5(instance)
    this.type = type
    this.pos = position
    this.vel = velocity
    // this.random = this.p5.random(2, 30)
    // console.log('random', this.random)
    // this.vector = this.p5.Vector.createVector(this.pos[0], this.pos[1], this.pos[3])
    // this.velocity = this.p5.Vector.createVector(this.vel[0], this.vel[1])
    this.vector = this.p5.createVector(this.pos[0], this.pos[1], this.pos[3])
    this.velocity = this.p5.createVector(this.vel[0], this.vel[1])
    this.vector.add(this.velocity)
    this.updateProperties()
    console.log('MVector initiated')
  }

  cleanup (cleanAll) {
    if (cleanAll) {
      this.vector = null
    }
    this.newForce = null
    this.velocity = null
  }

  updateProperties () {
    this.x = this.vector.x
    this.y = this.vector.y
    this.z = this.vector.z
    this.px = typeof this.prevForce === 'undefined' ? 0 : this.prevForce.x
    this.py = typeof this.prevForce === 'undefined' ? 0 : this.prevForce.y
    this.pz = typeof this.prevForce === 'undefined' ? 0 : this.prevForce.z
    this.cleanup(false)
  }

  applyForce (type, options) {
    switch (type) {
      case 'random':
      case 'noise':
        this.applyRandomForce(options)
        break
    }
  }

  applyRandomForce (options) {
    const constrainToScreen = options.cts
    const applyAcceleration = options.accel

    this.prevForce = {x: this.vector.x, y: this.vector.y, z: this.vector.z}

    this.newForce = this.generateNewRandomForce(options)
    this.vector.add(this.newForce.x, this.newForce.y, this.newForce.z)

    if (applyAcceleration) {
      this.applyAcceleration(options)
    }

    if (constrainToScreen) {
      this.vector.x = this.p5.constrain(this.vector.x, -this.p5.windowWidth / 2 + 1, this.p5.windowWidth / 2 - 1)
      this.vector.y = this.p5.constrain(this.vector.y, -this.p5.windowHeight / 2 + 1, this.p5.windowHeight / 2 - 1)
    }

    this.updateProperties()
  }

  generateNewRandomForce (options) {
    const forceType = options.type
    let randomness = []

    switch (forceType) {
      case 'random':
        randomness = this.generateRandomness('random', options)
        return this.p5.createVector(randomness[0], randomness[1])
      case 'noise':
        randomness = this.generateRandomness('noise', options)
        return this.p5.createVector(randomness[0], randomness[1])
    }
  }

  generateRandomness (type, options) {
    const rdm = this.rdm
    const forceRange = options.range
    let fx = 0
    let fy = 0
    switch (type) {
      case 'random':
        fx = rdm.ranflt(forceRange[0], forceRange[1])
        fy = rdm.ranflt(forceRange[2], forceRange[3])
        return [fx, fy]
      case 'noise':
        const increment = options.noff.i
        if (this.vector.x === -this.p5.windowWidth / 2 + 1 ||
            this.vector.x === this.p5.windowWidth / 2 - 1 ||
            this.vector.y === -this.p5.windowHeight / 2 + 1 ||
            this.vector.y === this.p5.windowHeight / 2 - 1) {
          options.noff.i = -options.noff.i + 0.5
        }
        this.offx = this.offx || options.noff.o[0]
        this.offy = this.offy || options.noff.o[1]
        // fx = this.p5.map(this.p5.noise(this.offx), 0, 1, -5, 5)
        // fy = this.p5.map(this.p5.noise(this.offy), 0, 1, -5, 5)
        fx = rdm.noisefltmap(this.offx, options.noff.i, [-5, 5])
        fy = rdm.noisefltmap(this.offy, options.noff.i, [-5, 5])
        this.offx = this.offx + increment
        this.offy = this.offy + increment
        return [fx, fy]
    }
  }

  applyAcceleration (options) {
    const type = options.accel.type
    const range = options.accel.range
    switch (type) {
      case 'random':
        const a = this.p5.random(range[0], range[1])
        this.newForce.mult(a)
        break
    }
  }
}
