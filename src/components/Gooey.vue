<template>
  <playground />
</template>

<script>
// import p5 from 'p5'
import playground from '@/sketches/playground'

export default {
  name: 'gooey',
  data () {
    return {
      msg: typeof p5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
