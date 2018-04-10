export default class Gooey {
  constructor (p5) {
    const p5Instance = this.p5 = p5
    console.log('Instantiate Gooey')
    this.setup()
  }

  setup () {
    console.log('Setup Gooey')
    this.backgroundColor = 51
  }
}
