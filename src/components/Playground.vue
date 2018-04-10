<template lang="html">
  <div>
    <div id="sidebars">
      <!-- <sui-sidebar v-bind:class="'inverted'" :animation=sidedbarAnimation :direction=sidebarDirection :visible=true :width=sidebarWidth id="sidebarInner">
        <sui-header size="large" :dividing=true id="sidebarHeader">{{headerText}}</sui-header>
        <input v-model="backgroundColor" v-on:change="setBackground" value="51" placeholder="Canvas Background">
      </sui-sidebar> -->
      <top-sidebar />
    </div>
    <div id="content" class="pusher">
      <sui-grid celled id="renderer">
        <sui-grid-row>
          <sui-grid-column :width="16">
            <sketch></sketch>
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    </div>
  </div>
</template>

<script>
// import p5 from 'p5'
import playground from '../sketches/playground'
let P5 = window.P5

export default {
  name: 'playground',
  data () {
    return {
      sidedbarAnimation: 'push',
      sidebarDirection: 'left',
      sidebarWidth: 'very wide',
      headerText: 'P5 Gooey',
      backgroundColor: 51
    }
  },
  methods: {
    setBackground: function (event) {
      P5.setBackground(this.backgroundColor)
    }
  }
}
</script>

<style lang="css">
#renderer.grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FAFAFA;
  width: calc(100%);
  height: calc(100%);
  box-shadow: 0px 0px 0px 1px #DDDDDD inset;
  padding: 0;
  margin: 0;
}

#renderer.grid>.row>.column {
  padding:0 !important;
}

#sidebarHeader {
  background: #444;
  color: #fff;
  padding:10px;
}

/* .column:after {
  background-color: rgba(86, 61, 124, .1);
  box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
  content: "";
  display: block;
  min-height: 50px;
} */
</style>
