import p5 from 'p5'
import 'p5/lib/addons/p5.sound'
import 'p5/lib/addons/p5.dom'

export default class Randomer {
  constructor (instance) {
    this.p5 = instance
  }

  ranint (range) {
    return Math.round(this.p5.random(range[0], range[1]))
  }

  ranflt (range) {
    return this.p5.random(range[0], range[1])
  }

  gauseint (sd) {
    return Math.round(this.gausflt(0, sd))
  }

  gausflt (sd) {
    return this.p5.randomGaussian(0, sd)
  }

  noisefltmap (time, increment, range) {
    const value = this.noiseflt(time, increment)
    return this.p5.map(value, 0, 1, range[0], range[1])
  }

  noiseflt (time, increment) {
    time = time + increment
    return this.p5.noise(time)
  }
}
