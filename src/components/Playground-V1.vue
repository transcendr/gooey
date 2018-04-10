<template lang="html">
  <sui-grid celled>
    <sui-grid-row>
      <sui-grid-column :width="16">
        <sui-header size="large">{{headerText}}</sui-header>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="3" id="controls">
        <p>{{headerText}}</p>
      </sui-grid-column>
      <sui-grid-column :width="13" id="renderer">
        <sketch />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import p5 from 'p5'
// import walker from '../sketches/walker'

export default {
  name: 'playground',
  data () {
    return {
      headerText: 'P5 GUI'
    }
  }
}
</script>
