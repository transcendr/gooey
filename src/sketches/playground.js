import p5 from 'p5'
import 'p5/lib/addons/p5.sound'
import 'p5/lib/addons/p5.dom'
import Gooey from '@/modules/Gooey'

let playground = (p5) => {
  this.g = new Gooey()

  p5.setup = () => {
    const g = this.g
    let checkCount = 0
    let loadInt = setInterval(() => {
      console.log('Checking Renderer Exists...')
      const renderer = document.getElementById('renderer')
      if (renderer) {
        console.log('Renderer DOM Object exists...')
        const canvasWidth = document.getElementById('renderer').offsetWidth // p5.windowWidth
        const canvasHeight = document.getElementById('renderer').offsetHeight // p5.windowHeight
        const canvas = this.canvas = p5.createCanvas(canvasWidth, canvasHeight)
        canvas.parent('sketch')
        p5.background(g.backgroundColor)
        clearInterval(loadInt)
      } else if (checkCount > 20) {
        // clearInterval(loadInt)
        location.reload()
      }
      checkCount++
    }, 500)
  }

  p5.setBackground = (value) => {
    const g = this.g
    g.backgroundColor = p5.int(value)
    console.log('set background to', g.backgroundColor)
    p5.background(g.backgroundColor)
  }
}

const P5 = window.P5 = p5
playground = window.P5 = new P5(playground)

export default playground
